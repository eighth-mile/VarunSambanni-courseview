import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import DownloadButton from './DownloadButton';
import SyncButton from './SyncButton'
import ListItem from './ListItem';

export default function List() {
    return (
        <View style={styles.container}>
            <ListItem 
                title={"1st SEM BE Phy Cycle"} 
                subtitle={"9 subjects"} 
                action={<DownloadButton/>}
            />
            <ListItem 
                title={"2nd SEM BE Chem Cycle"} 
                subtitle={"8 subjects"} 
                action={<SyncButton/>}
            />
            <ListItem 
                title={"3rd SEM BE Phy Cycle"} 
                subtitle={"9 subjects"} 
                action={<DownloadButton/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  text: {
      fontSize: 20,
      textAlign: 'center'
  },
  button: {
      borderRadius: 4,
      backgroundColor: '#6699ff',
      padding: 4,
      width: 120,
      textAlign:'center'
  }
});
