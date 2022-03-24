import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview'
import getSyllabusHTML from '../utils/Content';
import { get } from '../utils/database'

export default function SubjectSyllabus({ navigation, route }) {
    const path = route.params.path;
    const [loading, setLoading] = useState(true);
    const [html, setHtml] = useState(null);

    useEffect(async () => {
        const subjectDetails = await get(path);
        const htmlContent = getSyllabusHTML(subjectDetails.content);
        setHtml(htmlContent);
        setLoading(false);
    }, [path]);

    function handleWebViewRequest(request) {
        const { url } = request;
        if (!url) return false;

        if (url !== "about:blank") {
            Linking.openURL(url);
            return false;
        } else {
            return true;
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ height: 100 }}></View>
            <WebView
                originWhitelist={['*']}
                source={{ html: html }}
                onShouldStartLoadWithRequest={handleWebViewRequest}
            />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
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
