import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function ListItem({ title, subtitle, action, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <View style={styles.actionContainer}>
        {action}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    maxHeight: 100,
    padding: 2,
    width: 500,
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 4
  },
  subtitle: {
    fontSize: 15,
    color: 'gray'
  },
  button: {
    borderRadius: 4,
    backgroundColor: '#6699ff',
    padding: 4,
    margin: 20,
    width: 100,
    textAlign: 'center',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center'
  }
});