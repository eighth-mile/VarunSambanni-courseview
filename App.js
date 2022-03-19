import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import List from './components/List'
import { StatusBar } from 'expo-status-bar';


export default function App() {

  return (
     <View style={styles.container}>
        <List/>
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
