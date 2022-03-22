import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking } from 'react-native';
import List from '../components/List'
import ListItem from "../components/ListItem";
import HomeEmptyView from '../components/HomeEmptyView'
import Loading from "../components/Loading";
import { getOfflinePrograms, setOfflinePrograms } from "../utils/database";
import DeleteButton from "../components/DeleteButton";

export default function HomeView({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [programs, setPrograms] = useState([]);

    function onAddcourse() {
        console.log("add course pressed");
        navigation.navigate('ProgramSelector');
    }

    async function deleteProgram(title) {
        const offlinePrograms = await getOfflinePrograms();
        delete offlinePrograms[title];
        console.log('Delete button pressed offlinePrograms', offlinePrograms);
        await setOfflinePrograms(offlinePrograms);
        setPrograms(Object.values(offlinePrograms));
    }

    useEffect(async function () {
        const offlinePrograms = await getOfflinePrograms();
        setPrograms(Object.values(offlinePrograms));
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loading />
    }
    else if (programs.length !== 0) {
        return (
            <View style={styles.container}>
                {programs.map((program, index) => {
                    return <ListItem key={program.title}
                        title={program.title}
                        subtitle={program.subjects.length}
                        action={<DeleteButton onPress={() => deleteProgram(program.title)} />}
                    >
                    </ListItem>
                })}
                <TouchableOpacity style={styles.button} onPress={onAddcourse}>
                    <Text >Add Course</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HomeEmptyView onPress={onAddcourse}></HomeEmptyView>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        borderRadius: 4,
        backgroundColor: '#6699ff',
        borderWidth: 2,
        borderColor: 'black',
        padding: 4,
        width: 120,
        textAlign: 'center'
    },
    errMsg: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    }
});
