import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const NoteCard = () => {
  const notes = [
    { id: '1', title: 'Grocery List', desc: 'Buy milk, eggs, bread, and fruits.' },
    { id: '2', title: 'Meeting Notes', desc: 'Discuss project milestones and deadlines.' },
    { id: '3', title: 'Travel Plans', desc: 'Book flights and hotels for the upcoming trip.' },
    { id: '4', title: 'Workout Routine', desc: 'Morning yoga, afternoon gym, and evening walk.' },
    { id: '5', title: 'Ideas for Blog', desc: 'Write about tech trends, programming tips, and personal experiences.' },
    { id: '6', title: 'Reading List', desc: 'Finish reading "Clean Code" and "The Pragmatic Programmer".' },
    { id: '7', title: 'Dinner Recipe', desc: 'Prepare lasagna with garlic bread and a side salad.' },
    { id: '8', title: 'Project Tasks', desc: 'Complete UI design and implement authentication.' },
    { id: '9', title: 'Weekend Activities', desc: 'Hike in the morning, visit museum in the afternoon.' },
    { id: '10', title: 'Shopping List', desc: 'Buy new shoes, get a haircut, and pick up dry cleaning.' },
    { id: '11', title: 'Event Planning', desc: 'Organize the office party and send invitations.' },
    { id: '12', title: 'Vacation Packing', desc: 'Pack clothes, toiletries, and travel documents for the trip.' },
    { id: '13', title: 'Movie Watchlist', desc: 'Watch "Inception", "The Matrix", and "Interstellar".' },
    { id: '14', title: 'Daily Routine', desc: 'Wake up early, exercise, work, and relax in the evening.' },
    { id: '15', title: 'Personal Goals', desc: 'Learn a new language and complete a marathon.' },
  ];


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {notes.map((note) => (
          <TouchableOpacity key={note.id} style={styles.card}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.desc}>{note.desc}</Text>
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
