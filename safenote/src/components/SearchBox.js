import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search notes"
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd', 
    borderWidth: 1, 
    borderRadius: 32, 
    paddingHorizontal: 15,
    paddingVertical: 0,
    margin: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '95%',
    alignSelf: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    width: 32, 
    height: 32, 
    borderRadius: 16, 
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
});
