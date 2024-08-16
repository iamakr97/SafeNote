import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const initialLabels = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Shopping', value: 'shopping' },
];

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [labels, setLabels] = useState(initialLabels);
  const [selectedLabel, setSelectedLabel] = useState('all');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleAddNewLabel = (inputValue) => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue && !labels.some(label => label.label.toLowerCase() === trimmedValue.toLowerCase())) {
      const newLabel = { label: trimmedValue, value: trimmedValue.toLowerCase() };
      setLabels([...labels, newLabel]);
    } else if (trimmedValue) {
      Alert.alert('Label already exists');
    }
  };

  const renderLabel = () => {
    if (selectedLabel || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select or Add Label
        </Text>
      );
    }
    return null;
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.label}</Text>
    </View>
  );

  const handleSave = () => {
    let valid = true;

    // Validation for title
    if (title.length < 3) {
      setTitleError('Title must be at least 3 characters long');
      valid = false;
    } else {
      setTitleError('');
    }

    // Validation for description
    if (description.length < 3) {
      setDescriptionError('Description must be at least 3 characters long');
      valid = false;
    } else {
      setDescriptionError('');
    }

    if (valid) {
      console.log('Note saved:', { title, description, selectedLabel, isPrivate });
      setTitle('');
      setDescription('');
      setSelectedLabel('all');
      setIsPrivate(false);
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setSelectedLabel('all');
    setIsPrivate(false);
    setTitleError('');
    setDescriptionError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Note</Text>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter note title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={labels}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select or add label' : '...'}
        searchPlaceholder="Search or add new label..."
        value={selectedLabel}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setSelectedLabel(item.value);
          setIsFocus(false);
        }}
        renderItem={renderItem}
        onSearch={inputValue => {
          handleAddNewLabel(inputValue);
        }}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.textInput, styles.descriptionInput]}
        placeholder="Enter note description"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      {descriptionError ? <Text style={styles.errorText}>{descriptionError}</Text> : null}

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Private Note:</Text>
        <Switch
          value={isPrivate}
          onValueChange={setIsPrivate}
          thumbColor={isPrivate ? '#ff8856' : '#ccc'}
          trackColor={{ false: '#767577', true: '#ff8856' }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10, 
    fontSize: 16,
    color: '#000',
  },
  descriptionInput: {
    height: 150,  
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000', 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#ff8856',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
