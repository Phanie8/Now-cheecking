import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; // For checkmark icon

export default function App() {
    const [fadeAnim] = useState(new Animated.Value(0)); // For fade-in animation
    const [buttonAnim] = useState(new Animated.Value(1)); // For button press animation

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500, // Duration for fade-in
            useNativeDriver: true,
        }).start();
    }, []);

    // Button press animation
    const handlePressIn = () => {
        Animated.spring(buttonAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonAnim, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            {/* Logo */}
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

            {/* Title and Subtitle */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>NOW CHECKING</Text>
                <Text style={styles.subtitle}>
                    Introducing Now Checking the Healthcare app made for ewvery Filipino. Access to healthcare you deserve, at the palm of your hands.
                </Text>
            </View>

            {/* Animated Button */}
            <Animated.View style={{ transform: [{ scale: buttonAnim }] }}>
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Link href="/sign-in" style={styles.buttonText}>Continue with Email</Link>
                </TouchableOpacity>
            </Animated.View>

            {/* New Account Link */}
            <View style={styles.newAccountContainer}>
                <Text style={styles.newAccountText}>
                    New to Now Checking?{' '}
                    <Link href="/sign-up" style={styles.newAccountLink}>
                        Create your new account
                    </Link>
                </Text>
            </View>

            <StatusBar style="light" />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF99CC', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: '#a8cce6ff',
        padding: 10,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: '#183246', // Dark blue for title
        fontSize: 24, // Title size
        fontFamily: 'Poppins-SemiBold', // Font for title
        textAlign: 'center',
    },
    subtitle: {
        color: '#183246', // Dark blue for subtitle
        fontSize: 16, // Subtitle size
        fontFamily: 'Poppins-Regular', // Font for subtitle
        textAlign: 'center',
        marginTop: 10, // Space between title and subtitle
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#FF1694', // Button color
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 10,
        shadowColor: '#FF1694',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
    },
    buttonText: {
        color: '#ffffff', // Button text color
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    newAccountContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    newAccountText: {
        color: '#183246', // Dark blue for text
        fontSize: 16,
    },
    newAccountLink: {
        textDecorationLine: 'underline',
        color: '#FF1694', // Matching the button color
        fontWeight: 'bold',
    },
});
