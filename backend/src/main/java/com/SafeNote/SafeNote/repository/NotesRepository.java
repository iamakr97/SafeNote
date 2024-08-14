package com.SafeNote.SafeNote.repository;

import com.SafeNote.SafeNote.models.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Notes, String> {

}
