import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const User = () => {
    const navigation = useNavigation();
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Number of Notes:</Text>
          <Text style={styles.infoValue}>45</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Labels:</Text>
          <TouchableOpacity style={styles.labelsButton} onPress={()=>navigation.navigate("AllLabels")}>
            <Text style={styles.labelsButtonText}>View/Edit Labels</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  infoItem: {
    flex: 1,
    marginHorizontal: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#555',
  },
  labelsButton: {
    backgroundColor: '#ff8856',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  labelsButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff8856',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
