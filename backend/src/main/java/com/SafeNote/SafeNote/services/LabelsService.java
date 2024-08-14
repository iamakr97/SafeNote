package com.SafeNote.SafeNote.services;

import com.SafeNote.SafeNote.dto.LabelsDto;
import java.util.List;
import java.util.Optional;

public interface LabelsService {
    LabelsDto addLabel(LabelsDto labelsDto);

    LabelsDto updateLabel(LabelsDto labelsDto);

    LabelsDto getLabelsById(String id);

    Optional<LabelsDto> getLabelsByLabelName(String labelName);

    List<LabelsDto> getAllLabels(String userId);

    void deleteLabel(String id);
}
