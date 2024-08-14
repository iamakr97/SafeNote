package com.SafeNote.SafeNote.services;


import com.SafeNote.SafeNote.dto.UserDto;
import java.util.List;

public interface UserService {
    UserDto addUser(UserDto userDto);
    UserDto updateUser(String id, UserDto userDto);
    UserDto deleteUser(String id);
    UserDto getUser(String id);
    boolean isUserExist(String email);
    List<UserDto> getAllUsers();
}
