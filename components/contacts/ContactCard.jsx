import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ContactCard = ({ 
    imageUrl, 
    birthday = 'N/A', 
    name = 'N/A', 
    location = 'N/A', 
    email = 'N/A', 
    phone = 'N/A', 
    defaultReminder = '3days'
}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [reminder, setReminder] = useState(defaultReminder);
    const [notes, setNotes] = useState('');

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.star}>
                <Text>{isFavorite ? '★' : '☆'}</Text>
            </TouchableOpacity>
            <View style={styles.reminderContainer}>
                <Text>Reminder:</Text>
                <Picker
                    selectedValue={reminder}
                    onValueChange={(itemValue) => setReminder(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="3 days" value="3days" />
                    <Picker.Item label="4 weeks" value="4weeks" />
                    {/* Add more options as needed */}
                </Picker>
            </View>
            <Text>Birthday: {birthday}</Text>
            <Text>Name: {name}</Text>
            <Text>Location: {location}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <TextInput
                multiline
                style={styles.notesInput}
                value={notes}
                onChangeText={setNotes}
                placeholder="Notes..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // ... [Same as before]
});

export default ContactCard;
