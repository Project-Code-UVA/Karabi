import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {
    // Create useState variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the login process with firebase
    // Souce: https://firebase.google.com/docs/auth/web/start#web-modular-api
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    };

    // Return the JSX for the Login component
    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Log In!" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;