import React from 'react'
import { Text, View, StyleSheet, Dimensions} from 'react-native'
import { Web } from 'react-native-openanything'
import {WebView} from 'react-native-webview'
import PDFShowHeader from '../components/PDFShowHeader'


const screenWidth = Dimensions.get('window').width

// uri: 'https://aurparhobucket.s3.ap-south-1.amazonaws.com/notes/'+note.fileName
const NotePDFShow = ({navigation}) => {
    const note = navigation.getParam('note')
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <PDFShowHeader navigation={navigation} note={note} />
            <WebView
                style={{height: 200, width: screenWidth-20, backgroundColor: '#000000', marginTop: 130, margin: 10, paddingTop: 100}}
                source={{uri: `https://aurparhobucket.s3.ap-south-1.amazonaws.com/notes/${note.fileName}`}}
            />
        </View>
    )
}

export default NotePDFShow