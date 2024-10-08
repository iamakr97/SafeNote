import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AddNoteButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNote')}>
      <View style={styles.innerCircle}>
        <Text style={styles.plusText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddNoteButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  innerCircle: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'transparent',
    borderTopColor: '#FF5733',
    borderRightColor: '#FFBD33',
    borderBottomColor: '#28A745',
    borderLeftColor: '#17A2B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 36,
    color: '#ff8856',
    fontWeight: 'bold',
  },
});
