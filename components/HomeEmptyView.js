import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { AntDesign  } from '@expo/vector-icons';


export default function HomeEmptyView({onPress}) {

    return <View style={styles.container}>
            <AntDesign name="addfile" size={60} color="black" style={styles.icon}/>
            <Text style={styles.text}>Consider adding programs from our repository</Text>
            <Text>{'\n'}</Text>
            <TouchableOpacity title='Add Course' style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Add Course</Text>
            </TouchableOpacity>
        </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  icon:{
    padding: 40
  },
  text: {
      fontSize: 20,
      textAlign: 'center',
  },
  button: {
      borderRadius: 4,
      backgroundColor: '#6699ff',
      padding: 4,
      width: 120,
      textAlign:'center',
      borderWidth: 2
  }
});
