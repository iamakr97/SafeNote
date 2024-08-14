package com.SafeNote.SafeNote.controllers;

import com.SafeNote.SafeNote.dto.AllNotesResponse;
import com.SafeNote.SafeNote.dto.ApiResponseMessage;
import com.SafeNote.SafeNote.dto.NotesDto;
import com.SafeNote.SafeNote.services.NotesService;
import com.SafeNote.SafeNote.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
public class NotesController {
    @Autowired
    private NotesService notesService;

    @Autowired
    private UserService userService;

    @PostMapping("/addNote")
    public ResponseEntity<ApiResponseMessage> addNoteHandler(@RequestHeader("Authorization") String userId, @Valid @RequestBody NotesDto notesDto) {
        notesDto.setId(UUID.randomUUID().toString());
        notesDto.setCreatedAt(LocalDateTime.now());
        // we will write code here for private notes ....

        NotesDto savedNotesDto = notesService.addNote(userId, notesDto);
        ApiResponseMessage apiResponseMessage = ApiResponseMessage.builder()
                .message("Notes Created Successfully")
                .success(true)
                .httpStatus(HttpStatus.CREATED)
                .build();
        return new ResponseEntity<>(apiResponseMessage, HttpStatus.CREATED);
    }

    @GetMapping("/allNotes")
    public ResponseEntity<AllNotesResponse> getAllNotesHandler(@RequestHeader("Authorization") String userId) {
        List<NotesDto> notesDtoList = notesService.getAllNotes(userId);
        AllNotesResponse allNotesResponse = AllNotesResponse.builder()
                .success(true)
                .message("All Notes Fetched Successfully")
                .httpStatus(HttpStatus.OK)
                .allNotes(notesDtoList)
                .build();

        return new ResponseEntity<>(allNotesResponse, HttpStatus.OK);
    }

    @GetMapping("/getOneNote/{noteId}")
    public ResponseEntity<NotesDto> getOneNotesHandler(@RequestHeader("Authorization") String userId, @PathVariable() String noteId) {

        NotesDto notesDto = notesService.getOneNote(userId, noteId);
        return new ResponseEntity<>(notesDto, HttpStatus.OK);
    }

    @PutMapping("/deleteNote/{noteId}")
    public ResponseEntity<ApiResponseMessage> deleteNoteHandler(@RequestHeader("Authorization") String userId, @PathVariable() String noteId) {
        notesService.deleteNote(userId, noteId);
        ApiResponseMessage apiResponseMessage = ApiResponseMessage.builder()
                .message("Note deleted successfully")
                .success(true)
                .httpStatus(HttpStatus.OK)
                .build();
        return new ResponseEntity<>(apiResponseMessage, HttpStatus.OK);
    }

    @PostMapping("/updateNote/{noteId}")
    public ResponseEntity<ApiResponseMessage> updatedNoteHandler(@RequestHeader("Authorization") String userId, @PathVariable String noteId, @Valid @RequestBody NotesDto notesDto) {

        notesDto.setId(noteId);


        NotesDto updatedNote = notesService.updateNote(userId, notesDto);

        ApiResponseMessage apiResponseMessage = ApiResponseMessage.builder()
                .message("Note updated successfully")
                .success(true)
                .httpStatus(HttpStatus.OK)
                .build();

        return new ResponseEntity<>(apiResponseMessage, HttpStatus.OK);
    }
}
