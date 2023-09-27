import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactContainer from './components/contacts/ContactContainer';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 100, color: "white"}} >
        Karabi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
