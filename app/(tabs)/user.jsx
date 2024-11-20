import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.field}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} value="Vince Stephanie" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Middle Name</Text>
        <TextInput style={styles.input} value="Mandaya" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} value="Ypon" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Birthdate</Text>
        <TextInput style={styles.input} value="Apr 14, 2002" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value="vincesteph@gmail.com" />
      </View>
      <Link href="/files"  style={styles.link}> <Button title= "FILES " color="#ff69b4" onPress={() => {}} /></Link>
      <Link href="/login"  style={styles.link}> <Button title="Log out" color="#ff69b4" onPress={() => {}} /></Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F99DBC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default Profile;
