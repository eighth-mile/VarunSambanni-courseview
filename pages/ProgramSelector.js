import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import List from '../components/List';
import ListItem from '../components/ListItem';
import { getProgramsFromRepo } from '../utils/api';
import { get } from '../utils/database';
import DownloadButton from '../components/DownloadButton';
import SyncButton from '../components/SyncButton';
import { downloadProgramFromRepo } from '../utils/api'

export default function ProgramSelector() {
    const [isLoading, setIsLoading] = useState(false);
    const [programs, setPrograms] = useState([]);
    const [error, setError] = useState(false);
    useEffect(async function () {
        const programJSON = await get('programs');
        console.log("localstorage => ", programJSON);
        try {
            const result = await getProgramsFromRepo();
            console.log("Programs fetched => ", programJSON);
            setPrograms(result);
        }
        catch (err) {
            setError(true);
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }

    }, []);

    function downloadProgram(index) {
        console.log("Download pressed");
        downloadProgramFromRepo(index);
    }

    return (
        <View style={styles.container}>
            {/*error ? <Text style={styles.errMsg}>Some error occured</Text> : <List programs={programs} /> */}
            {
                <List>
                    {
                        programs.map((program, index) => {
                            const subjectLength = program.subjects.length;
                            const subjectsText = `${subjectLength} subjects`;
                            console.log(subjectLength, ' ', subjectsText);
                            return (
                                <ListItem
                                    key={program.title}
                                    title={program.title}
                                    subtitle={subjectsText}
                                    action={program.isDownloaded ? <SyncButton onPress={() => downloadProgram(index)} /> : <DownloadButton onPress={() => downloadProgram(index)} />}>
                                </ListItem>
                            )
                        })
                    }
                </List>

            }
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        width: '100%'
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
    },
    errMsg: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    }
});
