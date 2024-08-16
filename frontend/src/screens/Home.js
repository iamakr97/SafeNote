import { View } from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import Labels from '../components/Labels';
import NoteCard from '../components/NoteCard';
import AddNoteButton from '../components/AddNoteButton';

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white' }}>
        <SearchBox />
        <Labels />
        <NoteCard />
      </View>
      <AddNoteButton />
    </View>
  );
};

export default Home;

