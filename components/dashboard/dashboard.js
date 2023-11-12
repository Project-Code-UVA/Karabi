import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Dashboard() {

    const [userUID, setUserUID] = useState(''); // Initialize userUID state variable


    // Get function to retrieve userUID from AsyncStorage
    const getUserUID = async () => {
        try {
            const userUID = await AsyncStorage.getItem('userUID');
            if (userUID !== null) {
                setUserUID(userUID);
            }
        }
        catch (error) {
            const errorMessage = error.message;
            Alert.alert(errorMessage);
        }
    }

    useEffect(() => {
        getUserUID();
    }, []);



    return (
        <View>
            <Text>Hi!</Text>
            {userId && <Text>User ID: {userId}</Text>}
        </View>
    );
}

export default Dashboard;