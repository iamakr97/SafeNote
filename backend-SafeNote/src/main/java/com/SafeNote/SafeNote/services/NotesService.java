package com.SafeNote.SafeNote.services;


import com.SafeNote.SafeNote.dto.NotesDto;

import java.util.List;

public interface NotesService {
    NotesDto addNote(String userId, NotesDto notesDto);
    List<NotesDto> getAllNotes(String userId);
    NotesDto getOneNote(String userId, String noteId);
    void deleteNote(String userId, String noteId);
    NotesDto updateNote(String userId, NotesDto notesDto);
}
