import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
      <ImageBackground source={{uri: 'https://i.pinimg.com/736x/d0/00/a7/d000a723ad568851ce1960002681f6d1.jpg'}} style={styles.background}>
        <View style={styles.overlay}>
        <Text style={styles.title}>WELCOME </Text>
          <Text style={styles.title}>NOW CHECKING </Text>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <Text style={styles.loginText}>                                              Forgot Password? </Text>
          <Link href="/home" style={styles.link}>  <Button title="Log In" color="#E0115F"  onPress={() => {}} /></Link>
          <Text style={styles.signupText}>Don't have an account? <Link href="/signup" style={styles.signupLink}>Sign up </Link></Text>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    );
  }

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      padding: 30,
      borderRadius: 10,
      alignItems: 'center',
      margin: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    input: {
      height: 40,
      borderColor: 'pink',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      width: '80%',
    },
    link: {
      marginTop: 30,
      color: 'pink',
    },
    signupText: {
      marginTop: 10,
      color: 'black',
    },
    signupLink: {
      color: 'black',
    },
  });
