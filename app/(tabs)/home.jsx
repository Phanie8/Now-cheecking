import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/d0/00/a7/d000a723ad568851ce1960002681f6d1.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>NEED A DOCTOR?</Text>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search by name,hospital,city,etc" 
        />
        <View style={styles.product}>
          <Image 
            source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33931/medical-doctor-woman-clipart-xl.png' }} 
            style={styles.image} 
          />
          <View style={styles.details}>
            <Text style={styles.title}>* YOU NEED A DAILY DOSE OF SMILE *</Text>
            <Text style={styles.price}> </Text>
            <Link href="/services"  style={styles.link}> <Button title="CONSULT NOW" color="#ff69b4" onPress={() => {}} /></Link>
            <Text style={styles.price}> </Text>
            
          
          </View>
        </View>
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 2,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
    padding: 10,
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 20,
    color: '#ff69b4',
  },
  searchBar: {
    height: 50,
    borderColor: '#ff69b4',
    borderWidth: 7,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  product: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 40,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  details: {
    maxWidth: 300,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#993399',
  },
  ingredients: {
    fontSize: 10,
    marginVertical: 5,
    textAlign: 'right',
    color: 'red',
    fontWeight: 'bold'
  },
});

export default Home;
