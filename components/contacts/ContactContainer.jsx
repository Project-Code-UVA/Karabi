import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


// Create the information itself
const ContactInfo = ({ name, phone, email }) => (
    <View style={styles.infoContainer}>
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text styles={styles.details}>{phone}</Text>
            <Text styles={styles.details}>{email}</Text>
        </View>
    </View>
)

// Create the button
const ReminderButton = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Set Reminder</Text>
    </TouchableOpacity>
)

// Main ContactContainer Component
const ContactContainer = ({ contact, onSetReminder }) => {
    return (
        <View style={styles.container}>
            <ContactInfo name={contact.name} phone={contact.phone} email={contact.email} />
            <ReminderButton onPress={onSetReminder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5',
    },
    infoContainer: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 1, // shadows for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    name: {
        fontSize: 18,
        marginBottom: 5,
    },
    button: {
        padding: 15,
        borderRadius: 8, 
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default ContactContainer;