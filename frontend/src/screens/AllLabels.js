import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

// Dummy data for labels
const initialLabels = [
  { id: '1', name: 'Work' },
  { id: '2', name: 'Personal' },
  { id: '3', name: 'Urgent' },
];

const AllLabels = () => {
  const [labels, setLabels] = useState(initialLabels);
  const [modalVisible, setModalVisible] = useState(false);
  const [newLabel, setNewLabel] = useState('');

  // Function to handle adding a new label
  const handleAddLabel = () => {
    if (newLabel.trim() === '') return;

    const newLabelData = {
      id: (labels.length + 1).toString(),
      name: newLabel,
    };

    setLabels([...labels, newLabelData]);
    setNewLabel('');
    setModalVisible(false);
  };

  // Function to handle editing a label
  const handleEdit = (id) => {
    // Navigate to edit screen or show edit dialog
    console.log(`Edit label with id: ${id}`);
  };

  // Function to handle deleting a label
  const handleDelete = (id) => {
    setLabels(labels.filter(label => label.id !== id));
  };

  // Function to render each label item
  const renderLabel = ({ item }) => (
    <View style={styles.labelItem}>
      <Text style={styles.labelText}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={labels}
        renderItem={renderLabel}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add New Label</Text>
      </TouchableOpacity>

      {/* Modal for adding a new label */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Label</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter label name"
              value={newLabel}
              onChangeText={setNewLabel}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleAddLabel}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AllLabels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  listContainer: {
    paddingBottom: 80, // Space for the sticky button
  },
  labelItem: {
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#4caf50',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
