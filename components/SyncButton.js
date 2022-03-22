import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SyncButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}><AntDesign name="sync" size={18} color="black" /> Sync</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: '#6699ff',
        padding: 4,
        margin: 4,
        width: 120,
        textAlign: 'center',
        borderWidth: 2
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center'
    }
});