import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DownloadButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}><AntDesign name="clouddownloado" size={18} color="black" /> Download</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  button: {
      borderRadius: 4,
      backgroundColor: '#6699ff',
      padding: 4,
      margin: 20,
      width: 120,
      textAlign:'center',
      borderWidth: 2
  },
  buttonText: {
      fontSize: 15,
      textAlign: 'center'
  }
});