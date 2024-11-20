import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const TypeOfService = () => {
  const [selectedService, setSelectedService] = useState('Home Service');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EASY WAY HERE</Text>
      <Text style={styles.subtitle}>Choose Type of Service</Text>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Branch Walk-in' && styles.selectedOption]} 
        onPress={() => setSelectedService('Branch Walk-in')}
        
      >
        <Image source={{ uri: 'https://i.pinimg.com/736x/29/f7/89/29f7894664b2359fc11349b54f910c33.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}>Branch Walk-in</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Video Call' && styles.selectedOption]} 
        onPress={() => setSelectedService('Video Call')}
        
      >
        <Image source={{ uri: 'https://i.pinimg.com/736x/29/f7/89/29f7894664b2359fc11349b54f910c33.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}>Video Call</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Home Service' && styles.selectedOption]} 
        onPress={() => setSelectedService('Home Service')}
      >
        <Image source={{ uri: 'https://img.freepik.com/premium-vector/cute-pink-house_135595-3462.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}>Home Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  option: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedOption: {
    backgroundColor: 'pink',
    borderColor: 'red',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FF1694',
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TypeOfService;
