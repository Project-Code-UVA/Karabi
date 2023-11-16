import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";

function Dashboard() {

    const [userUID, setUserUID] = useState(''); // Initialize userUID state variable
    const [contacts, setContacts] = useState([]); // Initialize contacts state variable

    // Fetch contacts
    async function fetchContacts(userUID) {
        const contacts = [];
        const db = getFirestore();
        const contactsRef = collection(db, 'users', userUID, 'contacts');
        const querySnapshot = await getDocs(contactsRef);

        querySnapshot.forEach((doc) => {
            contacts.push(doc.data());
        });
        console.log(contacts);
        return contacts;
    }

    const ContactItem = ({ contact }) => (
        <View>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
        </View>
    );


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

    // useEffect to call getUserUID() when Dashboard component is loaded
    // Source: https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        getUserUID();
        const contacts = fetchContacts(userUID);
        setContacts(contacts);
    }, []);



    return (
        <View>
            <Text>Hi!</Text>
            {userUID && <Text>User ID: {userUID}</Text>}
            <FlatList
                data={contacts}
                renderItem={({ item }) => <ContactItem contact={item} />}
                keyExtractor={item => item.key}
            />
        </View>
    );
}

export default Dashboard;