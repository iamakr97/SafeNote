package com.SafeNote.SafeNote.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiResponseMessage {
    private boolean success;
    private String message;
    private HttpStatus httpStatus;
}
