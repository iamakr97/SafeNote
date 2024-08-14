package com.SafeNote.SafeNote.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Notes {

    @Id
    @Column(unique = true)
    private String id;

    private String title;
    private String content;
    private boolean isPrivate;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "labelId", nullable = false)
    private Labels label;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

}
