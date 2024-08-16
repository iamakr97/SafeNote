import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const ShowNote = ({ route, navigation }) => {
  const { title, content, isPrivate, createdAt } = route.params; // Access note data passed via props

  const handleEdit = () => {
    // Navigate to the edit screen with the note data
    navigation.navigate('EditNote', { title, content, isPrivate, createdAt });
  };

  const handleDelete = () => {
    // Handle delete note logic here
    alert('Note deleted!');
    navigation.goBack();
  };

  // Format the created date and time
  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.metadata}>Created on: {formatDate(createdAt)}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit Note</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  metadata: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff8856',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#d3d3d3', // Light gray for delete button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
