package com.SafeNote.SafeNote.services.impl;

import com.SafeNote.SafeNote.dto.UserDto;
import com.SafeNote.SafeNote.exception.UserAlreadyExistsException;
import com.SafeNote.SafeNote.models.User;
import com.SafeNote.SafeNote.repository.UserRepository;
import com.SafeNote.SafeNote.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper = new ModelMapper();

    @Override
    public UserDto addUser(UserDto userDto) {
        String userEmail = userDto.getEmail();
        Optional<User> isUserExists = userRepository.findByEmail(userEmail);
        if (isUserExists.isPresent()) {
            throw new UserAlreadyExistsException("User with email: " + userEmail + " | already exists");
        }
        User user = modelMapper.map(userDto, User.class);
        User savedUser = userRepository.save(user);
        UserDto savedUserDto = modelMapper.map(savedUser, UserDto.class);
        return savedUserDto;
    }

    @Override
    public UserDto updateUser(String id, UserDto userDto) {
        return null;
    }

    @Override
    public UserDto deleteUser(String id) {
        return null;
    }

    @Override
    public UserDto getUser(String id) {
        return null;
    }

    @Override
    public boolean isUserExist(String email) {
        return userRepository.existsById(email);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return List.of();
    }
}
