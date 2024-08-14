package com.SafeNote.SafeNote.dto;


import lombok.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AllNotesResponse {
    private boolean success;
    private String message;
    private HttpStatus httpStatus;
    private List<NotesDto> allNotes;
}
