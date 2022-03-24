import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import Loading from '../components/Loading';
import { getOfflinePrograms } from '../utils/database';
import List from '../components/List';
import ListItem from '../components/ListItem';

export default function SubjectList({ navigation, route }) {
    const title = route.params.title;
    const [loading, setLoading] = useState(true);
    const [program, setProgram] = useState(null);

    useEffect(async () => {
        const offlinePrograms = await getOfflinePrograms();
        console.log("Offline programs => ", offlinePrograms);
        const programDetails = offlinePrograms[title];
        console.log(programDetails);
        setProgram(programDetails);
        setLoading(false);
    }, []);

    function navigateToContent(path) {
        navigation.navigate('SubjectSyllabus', { path });
    }

    if (loading) {
        return <Loading />
    }

    return <View style={styles.container}>
        <ScrollView>
            <List>
                {program.subjects.map(subject => (
                    <ListItem
                        key={subject.code}
                        title={subject.title}
                        subtitle={subject.code}
                        onPress={() => navigateToContent(subject.path)}
                    />
                ))}
            </List>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        flex: 1,
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
        textAlign: 'center'
    }
});
