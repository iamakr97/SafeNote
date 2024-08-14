package com.SafeNote.SafeNote.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LabelsDto {

    private String id;

    @NotBlank(message = "Label name cannot be blank")
    private String name;

}
