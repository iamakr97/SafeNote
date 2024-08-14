package com.SafeNote.SafeNote.services.impl;

import com.SafeNote.SafeNote.dto.LabelsDto;
import com.SafeNote.SafeNote.models.Labels;
import com.SafeNote.SafeNote.repository.LabelsRepository;
import com.SafeNote.SafeNote.services.LabelsService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@Service
public class LabelsServicesImpl implements LabelsService {
    @Autowired
    private LabelsRepository labelsRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public LabelsDto addLabel(LabelsDto labelsDto) {
        Labels labels = modelMapper.map(labelsDto, Labels.class);
        Labels savedLabels = labelsRepository.save(labels);
        return modelMapper.map(savedLabels, LabelsDto.class);
    }

    @Override
    public LabelsDto updateLabel(LabelsDto labelsDto) {
        return null;
    }

    @Override
    public LabelsDto getLabelsById(String id) {
        Optional<Labels> labelsOptional = labelsRepository.findById(id);
        if (labelsOptional.isPresent()) {
            return modelMapper.map(labelsOptional.get(), LabelsDto.class);
        } else {
            throw new RuntimeException("Label not found");
        }
    }

    @Override
    public Optional<LabelsDto> getLabelsByLabelName(String labelName) {
        return null;
    }

    @Override
    public List<LabelsDto> getAllLabels(String userId) {
        List<Labels> labels = labelsRepository.findAllByUserId(userId);
        Type listType = new TypeToken<List<LabelsDto>>() {
        }.getType();
        return modelMapper.map(labels, listType);
    }

    @Override
    public void deleteLabel(String id) {
        labelsRepository.deleteById(id);
    }
}
