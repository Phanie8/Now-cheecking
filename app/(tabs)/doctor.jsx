import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const DoctorSpecializations = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Doctor Specializations</Text>
      <View style={styles.specializationContainer}>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://thumbs.dreamstime.com/b/stethoscope-heart-icon-heartbeat-health-cardiology-symbol-isolated-vector-illustration-147389009.jpg' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Primary Care & General Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/1202624746/vector/pregnant-woman-vector-icon.jpg?s=612x612&w=0&k=20&c=kCZmQhF1xw59WMTtmT1cHfQgPYjvZunCDJb0xO0V1bg=' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>OB-GYN's & Women's Health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://img.freepik.com/premium-vector/isolated-pink-ribbon-vector-icon-powerful-symbol-breast-cancer-awareness_1105246-1541.jpg' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Cancer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/420/405/original/world-diabetes-day-elements-png.png' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Diabetes & Endocrinology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://png.pngtree.com/png-clipart/20220726/original/pngtree-eyes-development-pink-png-image_8396044.png' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Eye & Vision</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://img.freepik.com/premium-vector/anatomical-human-heart-cardiovascular-system-isolated-gray-background-health-care-concept-flat-vector-illustration-design-medicine-treatment-health-care-concept_124127-48.jpg?w=360' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Heart & Cardiology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-human-organ-skin-tissue-illustration-image_1215931.jpg' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Skin & Dermatology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQni5kdrot-TXLBMPMU0x7Vo7Tc_a8IUN9bMKimBCU6cU4GAE0E1MOj65W0sLjjvcCUaA0&usqp=CAU' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Lungs, Chest & Pulmonology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/093/514/non_2x/gastrointestinal-tract-anatomy-for-education-free-vector.jpg' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Stomach, Digestion & Gastroenterology</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1310jwTEXc9UsgCmVPsadrwkGdWEMKEbsiyLdsNiwgqxIg-splgYHbFQSuVegrfu_Z4&usqp=CAU' }} 
            style={styles.icon} 
          />
          <Text style={styles.specializationName}>Brain & Nerves</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialization}>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  specializationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specialization: {
    width: '48%',
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  specializationName: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default DoctorSpecializations;
