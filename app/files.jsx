import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const TypeOfService = () => {
  const [selectedService, setSelectedService] = useState('Home Service');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR FILES ARE HERE</Text>
      <Text style={styles.subtitle}>Medical History</Text>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Health Records' && styles.selectedOption]} 
        onPress={() => setSelectedService('Health Records')}
        
      >
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2865/2865320.png' }} style={styles.icon} />
        <Text style={styles.optionText}>Health Records</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Medical Certificate' && styles.selectedOption]} 
        onPress={() => setSelectedService('Medical Certificate')}
        
      >
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/102/734/small/medical-license-modern-concepts-design-illustration-vector.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}>Medical Certificate</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Your Schedule' && styles.selectedOption]} 
        onPress={() => setSelectedService('Your Schedule')}
        
      >
        <Image source={{ uri: 'https://cdn.vectorstock.com/i/500p/18/23/3d-daily-calendar-plan-vector-42141823.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}>Your Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Home Service' && styles.selectedOption]} 
        onPress={() => setSelectedService('Home Service')}
      >
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhChTmlcOV5HJpkuJLip-BbfeWXRTxYMHzuYzUi0jPxKg_nxA7XeMr-4gn_2PWlLpuwqE&usqp=CAU' }} style={styles.icon} />
        <Text style={styles.optionText}>Lab Results</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.option, selectedService === 'Branch Walk-in' && styles.selectedOption]} 
        onPress={() => setSelectedService('Branch Walk-in')}
        
      >
        <Image source={{ uri: 'https://thumbs.dreamstime.com/b/beautiful-doctor-checking-patient-history-records-cartoon-doodle-medical-health-worker-320262730.jpg' }} style={styles.icon} />
        <Text style={styles.optionText}> Doctors History</Text>
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
