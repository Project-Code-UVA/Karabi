import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactContainer from './components/contacts/ContactContainer';


export default function App() {
  return (
    <View style={styles.container}>
      <ContactContainer contact={{name: "arup", email: "s@mail.com", phone: "3"}} onSetReminder={() => console.log("Hey")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
