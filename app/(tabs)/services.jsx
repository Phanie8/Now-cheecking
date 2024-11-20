import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Link } from 'expo-router';
const Medicalreport = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Find a Services</Text>
      <View style={styles.productContainer}>
        <View style={styles.product}>
          <Image 
            source={{ uri: 'https://thumb.ac-illust.com/4f/4f8c2b19988cb717f676adcbf08ace1e_t.jpeg' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>BLOOD WORKS</Text>
          <Text style={styles.price}> Just click the button below to proceed</Text>
          <Link href="/typeofservice"  style={styles.link}> <Button title="BlOOD TEST" color="#ff69b4" onPress={() => {}} /></Link>
        </View>
        <View style={styles.product}>
          <Image 
            source={{ uri: 'https://us.123rf.com/450wm/pandavector/pandavector1504/pandavector150402172/38538256-illustration-of-vector-medical-modern-icon-in-design.jpg?ver=6' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>X-RAY'S</Text>
          <Text style={styles.price}>Just click the button below to proceed</Text>
          <Link href="/typeofservice"  style={styles.link}> <Button title="X-RAY" color="#ff69b4" onPress={() => {}} /></Link>
        </View>
        <View style={styles.product}> 
          <Image 
            source={{ uri: 'https://us.123rf.com/450wm/r4yhan/r4yhan2309/r4yhan230900336/214552265-doctors-and-nurses-treat-the-lung-covid-19-medical-illustration-ct-scan-of-the-lung.jpg?ver=6' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>CT SCANS</Text>
          <Text style={styles.price}>Just click the button below to proceed </Text>
          <Link href="/typeofservice"  style={styles.link}> <Button title="CT SCAN'S" color="#ff69b4" onPress={() => {}} /></Link>
        </View>
        <View style={styles.product}>
          <Image 
        source={{ uri: 'https://media.istockphoto.com/id/1220626626/vector/pharmacy.jpg?s=612x612&w=0&k=20&c=IIVIx0cUfBW6RW8uO3HWPFVb0ZhFnzgrk7BXM7H5SX8=' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>PHARMACY ORDER'S</Text>
          <Text style={styles.price}>Just click the button below to proceed</Text>
          <Link href="/pharmacyorder"  style={styles.link}> <Button title="PHARMACY ORDER" color="#ff69b4" onPress={() => {}} /></Link>
        </View>

        <View style={styles.product}>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/1139549801/vector/stethoscope-heart-icon.jpg?s=612x612&w=0&k=20&c=qEJ7fFxWkok8j7FYYj4NwAlHSgqsw-azZz7c3IQJ4KI=' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>ECG & HEART DIAGNOSTICS</Text>
          <Text style={styles.price}>Just click the button below to proceed</Text>
          <Link href="typeofservice"  style={styles.link}> <Button title="ECG & HEART DIAGNOSTICS" color="#ff69b4" onPress={() => {}} /></Link>
        </View>
        <View style={styles.product}>
          <Image 
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/004/756/672/non_2x/medical-report-icon-clinical-record-prescription-claim-medical-check-marks-report-health-insurance-concepts-premium-quality-modern-flat-design-graphic-elements-flat-illustration-free-vector.jpg' }} 
            style={styles.image} 
          />
          <Text style={styles.productName}>MEDICAL CERTIFICATES</Text>
          <Text style={styles.price}>Just click the button below to proceed</Text>
          <Link href="/typeofservice"  style={styles.link}> <Button title="MEDICAL CERTIFICATES" color="#ff69b4" onPress={() => {}} /></Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F99DBC',
    padding: 30,
  },
  header: {
    fontSize: 35,
    textAlign: 'auto',
    marginVertical: 20,
    color: 'white',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  product: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  productName: {
    fontSize: 20,
    marginTop: 10,
    color:'red'
  },
  price: {
    fontSize: 14,
    color: 'black',
  },
});

export default Medicalreport;












