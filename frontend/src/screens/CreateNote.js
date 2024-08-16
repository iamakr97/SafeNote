import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Textarea from 'react-native-textarea';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSave = () => {
    let isValid = true;
    if (title.trim().length < 3) {
      setTitleError('Title must be at least 3 characters long.');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (description.trim().length < 3) {
      setDescriptionError('Description must be at least 3 characters long.');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (isValid) {
      // Handle saving the note logic here
      Alert.alert('Note Saved', 'Your note has been saved successfully.');
      console.log('Title:', title);
      console.log('Description:', description);
      // Clear fields after saving
      setTitle('');
      setDescription('');
    }
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setTitleError('');
    setDescriptionError('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={[styles.textInput, titleError && styles.errorInput]}
        placeholder="Enter note title"
        value={title}
        onChangeText={setTitle}
      />
      {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}

      <Text style={styles.label}>Description:</Text>
      <Textarea
        containerStyle={[styles.textareaContainer, descriptionError && styles.errorTextareaContainer]}
        style={[styles.textarea, descriptionError && styles.errorTextarea]}
        maxLength={200}
        placeholder="Enter note description"
        placeholderTextColor="#c7c7c7"
        value={description}
        onChangeText={setDescription}
      />
      {descriptionError ? <Text style={styles.errorText}>{descriptionError}</Text> : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#000',
  },
  textareaContainer: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  textarea: {
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    color: '#000',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorTextareaContainer: {
    borderColor: 'red',
  },
  errorTextarea: {
    color: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
