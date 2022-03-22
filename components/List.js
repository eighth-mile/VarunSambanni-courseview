import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import SyncButton from './SyncButton'
import ListItem from './ListItem';
import { downloadProgramFromRepo } from '../utils/api'


/*
export default function List(prop) {
    const children = prop.chidlren ;
    return (
        <View style={styles.containter}>
            {children}
        </View>
    )
}
*/
function downloadProgram(index) {
    console.log("Download pressed");
    downloadProgramFromRepo(index);
}

export default function List(props) {
    const children = props.children;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
    return (
        <View style={styles.container}>
            {programs.map((program, index) => {
                return <ListItem key={program.title}
                    title={program.title}
                    subtitle={program.subjects.length}
                    action={program.isDownloaded ? <SyncButton onPress={() => downloadProgram(index)} /> : <DownloadButton onPress={() => downloadProgram(index)} />}>
                </ListItem>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        textAlign: 'center'
    }
});
