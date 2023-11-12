import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { navigate } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Store the userUID in AsyncStorage
    const setUserUID = async (userUID) => {
        try {
            await AsyncStorage.setItem('userUID', userUID);
        }
        catch (error) {
            const errorMessage = error.message;
            Alert.alert(errorMessage);
        }
    }

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Account created
                const user = userCredential.user;
                const userUID = user.uid;
                console.log(user);
                setUserUID(userUID);
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Sign Up!" onPress={handleSignUp} />
        </View>
    )
};

export default Signup;