import { View, Text, StyleSheet, TouchableOpacity,  Button,TextInput } from 'react-native';
import React, { useState } from 'react';

const PharmacyOrder = () => {
  const [prescription, setPrescription] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pharmacy Order</Text>
      <View style={styles.steps}>
      </View>
      <Text style={styles.subtitle}>Doctor's Prescription</Text>
      <View style={styles.prescriptionContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter prescription name"
          value={prescription}
          onChangeText={setPrescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add  a photo on Doctor's Prescription</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Button title="CONTINUE" color="#FF1694" onPress={() =>  alert('Added to Order!', )} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  prescriptionContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#FF1694',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#FF1694',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PharmacyOrder;
