import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ContactInfo = ({ name, phone, email }) => (
    <View style={StyleSheet.infoContainer}>
     
    </View>
)

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
    }
})