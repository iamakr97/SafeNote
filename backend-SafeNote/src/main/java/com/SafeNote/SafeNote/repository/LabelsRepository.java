package com.SafeNote.SafeNote.repository;

import com.SafeNote.SafeNote.models.Labels;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LabelsRepository extends JpaRepository<Labels, String> {
    Optional<Labels> findByNameAndUserId(String name, String userId);
    List<Labels> findAllByUserId(String userId);
}
