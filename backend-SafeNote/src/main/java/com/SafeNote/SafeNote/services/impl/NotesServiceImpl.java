package com.SafeNote.SafeNote.services.impl;

import com.SafeNote.SafeNote.dto.LabelsDto;
import com.SafeNote.SafeNote.dto.NotesDto;
import com.SafeNote.SafeNote.exception.ResourceNotFoundException;
import com.SafeNote.SafeNote.models.Labels;
import com.SafeNote.SafeNote.models.Notes;
import com.SafeNote.SafeNote.models.User;
import com.SafeNote.SafeNote.repository.LabelsRepository;
import com.SafeNote.SafeNote.repository.NotesRepository;
import com.SafeNote.SafeNote.repository.UserRepository;
import com.SafeNote.SafeNote.services.LabelsService;
import com.SafeNote.SafeNote.services.NotesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class NotesServiceImpl implements NotesService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private LabelsRepository labelsRepository;
    @Autowired
    private LabelsService labelsService;
    @Autowired
    private NotesRepository notesRepository;

    public NotesServiceImpl(UserRepository userRepository, ModelMapper modelMapper, LabelsRepository labelsRepository) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.labelsRepository = labelsRepository;
    }

    @Override
    public NotesDto addNote(String userId, NotesDto notesDto) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            throw new ResourceNotFoundException("User not found");
        }
        User user = optionalUser.get();

        Optional<Labels> labelOptional = labelsRepository.findByNameAndUserId(notesDto.getLabel(), userId);
        Labels label;
        if (!labelOptional.isPresent()) {
            LabelsDto labelsDto = new LabelsDto();
            labelsDto.setName(notesDto.getLabel());
            labelsDto.setId(UUID.randomUUID().toString());
            LabelsDto savedLabelsDto = labelsService.addLabel(labelsDto);
            label = modelMapper.map(savedLabelsDto, Labels.class);
            label.setUser(user);
            labelsRepository.save(label);
            user.getLabels().add(label);
        } else {
            label = labelOptional.get();
        }

        Notes notes = modelMapper.map(notesDto, Notes.class);
        notes.setLabel(label);
        notes.setUser(user);

        Notes savedNotes = notesRepository.save(notes);

        user.getNotes().add(savedNotes);
        userRepository.save(user);

        return modelMapper.map(savedNotes, NotesDto.class);
    }

    @Override
    public List<NotesDto> getAllNotes(String userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            throw new ResourceNotFoundException("User not found");
        }
        User user = optionalUser.get();

        List<Notes> notesList = user.getNotes();

        List<NotesDto> notesDtoList = notesList.stream()
                .map(note -> modelMapper.map(note, NotesDto.class))
                .toList();

        return notesDtoList;
    }

    @Override
    public NotesDto getOneNote(String userId, String noteId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            throw new ResourceNotFoundException("User not found");
        }
        Notes note = notesRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note with ID " + noteId + " not found"));
        return modelMapper.map(note, NotesDto.class);
    }

    @Override
    public void deleteNote(String userId, String noteId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));


        Notes note = notesRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note with ID " + noteId + " not found"));


        if (!note.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Note with ID " + noteId + " does not belong to user with ID " + userId);
        }


        user.getNotes().remove(note);

        userRepository.save(user);

        Labels label = note.getLabel();
        label.getNotes().remove(note);
        labelsRepository.save(label);

        notesRepository.delete(note);
    }

    @Override
    public NotesDto updateNote(String userId, NotesDto notesDto) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with ID " + userId + " not found"));


        Notes note = notesRepository.findById(notesDto.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Note with ID " + notesDto.getId() + " not found"));

        // Check if the note belongs to the user
        if (!note.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Note with ID " + notesDto.getId() + " does not belong to user with ID " + userId);
        }

        // Update note details
        note.setTitle(notesDto.getTitle());
        note.setContent(notesDto.getContent());

        // Update the label if needed
        if (notesDto.getLabel() != null && !notesDto.getLabel().equals(note.getLabel().getName())) {
            Optional<Labels> labelOptional = labelsRepository.findByNameAndUserId(notesDto.getLabel(), userId);
            Labels label;
            if (!labelOptional.isPresent()) {
                // If the new label does not exist, create it
                LabelsDto labelsDto = new LabelsDto();
                labelsDto.setName(notesDto.getLabel());
                labelsDto.setId(UUID.randomUUID().toString());
                LabelsDto savedLabelsDto = labelsService.addLabel(labelsDto);
                label = modelMapper.map(savedLabelsDto, Labels.class);
                label.setUser(user);
                labelsRepository.save(label);
                user.getLabels().add(label);
            } else {
                // Use the existing label
                label = labelOptional.get();
            }
            note.setLabel(label);
        }

        Notes updatedNote = notesRepository.save(note);

        return modelMapper.map(updatedNote, NotesDto.class);
    }

}
