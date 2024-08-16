import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let errors = {};

        if (!name) {
            errors.name = 'Name is required';
            valid = false;
        }
        if (!email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            valid = false;
        }
        if (!password) {
            errors.password = 'Password is required';
            valid = false;
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
            valid = false;
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSignup = () => {
        if (validate()) {
            alert("Signup successful!");
        }
    };

    const handleChange = (field, value) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
        switch (field) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.vectorContainer}>
                <Text style={styles.vectorText}>🌿 Welcome to SafeNote</Text>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.appTitle}>SafeNote</Text>
                <Text style={styles.header}>Create Your Account</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={[styles.input, errors.name && styles.errorInput]}
                    placeholder="Enter your name"
                    placeholderTextColor="#777"
                    value={name}
                    onChangeText={(value) => handleChange('name', value)}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={[styles.input, errors.email && styles.errorInput]}
                    placeholder="Enter your email"
                    placeholderTextColor="#777"
                    value={email}
                    onChangeText={(value) => handleChange('email', value)}
                    keyboardType="email-address"
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={[styles.input, errors.password && styles.errorInput]}
                    placeholder="Enter your password"
                    placeholderTextColor="#777"
                    value={password}
                    onChangeText={(value) => handleChange('password', value)}
                    secureTextEntry
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={[styles.input, errors.confirmPassword && styles.errorInput]}
                    placeholder="Confirm your password"
                    placeholderTextColor="#777"
                    value={confirmPassword}
                    onChangeText={(value) => handleChange('confirmPassword', value)}
                    secureTextEntry
                />
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.redirectContainer}>
                <Text style={styles.redirectText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.redirectLink}>Login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.button, styles.googleButton]}>
                <Text style={styles.buttonText}>Login with Google</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9',  // Light background color
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    vectorContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    vectorText: {
        fontSize: 20,
        color: '#6a994e',  // Soft green color
    },
    headerContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c6e49',  // Dark green color
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a4e69',  // Dark gray color
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#ffffff',  // White background for inputs
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        color: '#000',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
    },
    errorInput: {
        borderColor: '#e74c3c',  // Red color for errors
    },
    errorText: {
        color: '#e74c3c',  // Red color for error messages
        fontSize: 14,
        marginTop: 4,
    },
    button: {
        backgroundColor: '#2c6e49',  // Dark green for buttons
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    redirectContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    redirectText: {
        fontSize: 16,
        color: '#333',
    },
    redirectLink: {
        fontSize: 16,
        color: '#1e90ff',  // Blue color for links
        fontWeight: 'bold',
    },
    googleButton: {
        backgroundColor: '#db4a39',  // Google red color
        marginTop: 15,
    },
});
