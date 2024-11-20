import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const HealthcareApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Now Checking You</Text>
        <Text style={styles.helpIcon}> </Text>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tab}> All Messages</Text>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainText}>Doctor's meassages</Text>
        <Text style={styles.subText}>Doctor's will appear here once you find and book a consultation now.</Text>
      </View>
      <View style={styles.footer}>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F99DBC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  time: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpIcon: {
    fontSize: 18,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerIcon: {
    fontSize: 16,
  },
});

export default HealthcareApp;
