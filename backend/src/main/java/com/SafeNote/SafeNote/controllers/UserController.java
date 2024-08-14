package com.SafeNote.SafeNote.controllers;

import com.SafeNote.SafeNote.dto.LabelsDto;
import com.SafeNote.SafeNote.dto.NotesDto;
import com.SafeNote.SafeNote.dto.UserDto;
import com.SafeNote.SafeNote.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.UUID;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDto> createUserHandler(@Valid @RequestBody UserDto userDto) {

        userDto.setId(UUID.randomUUID().toString());

        userDto.setLabels(new ArrayList<LabelsDto>());
        userDto.setNotes(new ArrayList<NotesDto>());

        UserDto newUser = userService.addUser(userDto);

        return new ResponseEntity<UserDto>(newUser, CREATED);
    }
}
