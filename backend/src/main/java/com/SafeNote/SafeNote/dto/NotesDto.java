package com.SafeNote.SafeNote.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NotesDto {

    private String id;

    @Size(min = 3, message = "Title must be at least 3 characters long")
    private String title;

    @Size(min = 3, message = "Content must be at least 3 characters long")
    private String content;

    private boolean isPrivate;

    private LocalDateTime createdAt;

    private String label;

    private String userId;
}
