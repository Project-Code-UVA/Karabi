import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactCard from './components/contacts/ContactCard';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize: 100, color: "white"}} >
        Karabi
      </Text> */}
      <ContactCard 
    imageUrl="assets/favicon.png"
    birthday="Jan 1, 2000"
    name="John Doe"
    location="New York, USA"
    email="johndoe@example.com"
    phone="+1 123 456 7890"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
