import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { notes } from './data';
import { useState } from 'react';

const NoteCard = () => {
  const navigation = useNavigation();
  const [authRequired, setAuthRequired] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleNotePress = (note) => {
    if (note.isPrivate) {
      setSelectedNote(note);
      setAuthRequired(true);
    } else {
      navigation.navigate('Note', {
        title: note.title,
        content: note.content,
        isPrivate: note.isPrivate,
        createdAt: note.createdAt,
      });
    }
  };

  const handleAuthSuccess = () => {
    if (selectedNote) {
      navigation.navigate('Note', {
        title: selectedNote.title,
        content: selectedNote.content,
        isPrivate: selectedNote.isPrivate,
        createdAt: selectedNote.createdAt,
      });
      setAuthRequired(false);
      setSelectedNote(null);
    }
  };

  const handleAuthFailure = () => {
    Alert.alert('Authentication Failed', 'Unable to authenticate. Please try again.');
    setAuthRequired(false);
    setSelectedNote(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {notes.map((note) => (
          <TouchableOpacity
            key={note.id}
            style={[styles.card, note.isPrivate && styles.privateCard]}
            onPress={() => handleNotePress(note)}
          >
            {note.isPrivate ? (
              <Text style={styles.privateText}>This is a confidential note. Authenticate to view.</Text>
            ) : (
              <>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{note.content}</Text>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>
      {authRequired && (
        <View style={styles.authModal}>
          <Text style={styles.authText}>Please authenticate to view this note.</Text>
          <TouchableOpacity style={styles.authButton} onPress={handleAuthSuccess}>
            <Text style={styles.authButtonText}>Authenticate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authButton} onPress={handleAuthFailure}>
            <Text style={styles.authButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '48%', 
    minHeight: 100,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  privateCard: {
    backgroundColor: '#6A5ACD',
  },
  privateText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
  authModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  authText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  authButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  authButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
