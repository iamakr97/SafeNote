import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { notes } from './data';

const NoteCard = () => {
  const navigation = useNavigation();


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {notes.map((note) => (
          <TouchableOpacity
            key={note.id}
            style={styles.card}
            onPress={() => navigation.navigate('Note', {
              title: note.title,
              description: note.desc,
            })}
          >
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.desc} numberOfLines={2}>{note.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    width: '48%', // Two cards per row
    minHeight: 100,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
});
