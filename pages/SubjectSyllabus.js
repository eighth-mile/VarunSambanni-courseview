import React from 'react' 
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking} from 'react-native';
import {WebView} from 'react-native-webview'
import getSyllabusHTML from '../utils/Content';


const markdown = `
# Computer Aided Engineering Graphics

## Unit - I

**Introduction**: Significance of engineering graphics, BIS conventions, drawing sheets, drawing scales, dimensioning, line conventions, material conventions. Symbolic representation of fasteners - bolts and nuts, riveted, welded, brazed and soldered joints, bars and profile sections, electrical & electronic elements and piping. 

**Use of Simple CAD tools**: Overview of CAD software [Menu bar, tabs -sketch, modify, dimension, annotation and commands].
[Google][https://www.google.com/]
`
export default function SubjectSyllabus() {
    const htmlContent = getSyllabusHTML(markdown) ;  

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
            <View style={{height: 100}}></View>
            <WebView
                originWhitelist={['*']}
                source = {{html: htmlContent}}
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
      textAlign:'center'
  },
  errMsg: {
      color: 'red',
      fontSize: 20, 
      textAlign: 'center'
  }
});
