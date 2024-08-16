import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Labels = () => {
  const [activeLabel, setActiveLabel] = useState('All'); // Default active label
  const labelList = ['All', 'Work', 'Personal', 'Shopping', 'Wishlist']; // Example labels

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {labelList.map((label) => (
        <TouchableOpacity
          key={label}
          style={[
            styles.labelBox,
            label === activeLabel && styles.activeLabelBox,
          ]}
          onPress={() => setActiveLabel(label)}
        >
          <Text
            style={[
              styles.labelText,
              label === activeLabel && styles.activeLabelText,
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Labels;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  labelBox: {
    backgroundColor: '#f1f3f4',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    minHeight: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLabelBox: {
    backgroundColor: '#dbe9ff',
  },
  labelText: {
    color: '#3c4043',
    fontSize: 16,
    fontWeight: '500',
  },
  activeLabelText: {
    color: '#1a73e8',
  },
});
