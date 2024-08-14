package com.SafeNote.SafeNote.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserDto {


    private String id;

    @Size(min = 2, max = 25, message = "Name must be between 2 and 25 characters long")
    private String name;

    @Email(regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$", message = "Invalid Email")
    private String email;

    @NotBlank(message = "Password cannot be blank")
    private String password;

    private List<NotesDto> notes;
    private List<LabelsDto> labels;
}
