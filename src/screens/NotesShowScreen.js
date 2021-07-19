import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, RefreshControl, Dimensions, Linking, Image, FlatList, TouchableOpacity} from 'react-native'
import ShowHeader from '../components/ShowHeader'

const screenHeight = Dimensions.get('window').height


const NotesShowScreen = ({route, navigation})=> {
    // const [findSearchedNotes, searchedNotes] = useGetSearched()
    // useEffect(()=>{findSearchedNotes({})}, [])
    // console.log(searchedNotes)
    const note = navigation.getParam('note')
    console.log(note)
    return (
        <View style={{flex: 1, backgroundColor: '#1D1D1D', paddingHorizontal: 10}}>
            <ShowHeader navigation={navigation}/>
            <ScrollView style={{ paddingTop: screenHeight*0.16}} showsVerticalScrollIndicator={false}>
            <View style={{...styles.containerStyle, height: 600}}>
                <Image style={{flex: 1, height: 300, borderRadius: 10, borderColor: '#EAAA3B', borderWidth: 3, marginBottom: 15}} source={{uri:note.image}}/>
                <Text style={{...styles.headingStyle, textTransform: 'uppercase'}}>{note.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{...styles.headingStyle, fontWeight: '300', textTransform: 'uppercase', fontSize: 18, color: '#EAAA3B', marginBottom: 0}}>{note.subject}</Text>
                    {note.grade==='ALevels'? 
                    <Text style={{...styles.headingStyle, fontSize: 22, color: '#EAAA3B', marginBottom: 0}}>AL</Text>
                    :
                    <Text style={{...styles.headingStyle, fontSize: 22, color: '#EAAA3B', marginBottom: 0}}>OL</Text>
                    }
                </View>
            </View>
            <TouchableOpacity onPress={()=> {Linking.openURL(note.noteLink)}}>
                <View style={{...styles.containerStyle, backgroundColor: '#EAAA3B', borderRadius: 10}}>
                    <Text style={{textAlign: 'center', ...styles.headingStyle, marginBottom: 0, color: 'black', fontSize: 18}}>DOWNLOAD</Text>
                </View>
            </TouchableOpacity>
            
            {note.videoLink ? 
            <TouchableOpacity onPress={()=> {Linking.openURL(`https://www.youtube.com/watch?v=${note.videoLink}`)}}>
                <View style={{...styles.containerStyle, backgroundColor: '#EA3B3B', borderRadius: 10}}>
                    
                            <Text style={{textAlign: 'center', ...styles.headingStyle, marginBottom: 0, color: 'black', fontSize: 18}}>WATCH VIDEO</Text>
                        
                </View>
            </TouchableOpacity>
            : null}

            <View style={styles.containerStyle}> 
                <Text style={styles.headingStyle} >Found an error?</Text>
                <Text style={styles.paraStyle} >Aaahh shoot, my bad. Please let me know where I made a mistake by filling in the "Report Error" form. Thanks!</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('ContactUs')}}>
                    <View style={{...styles.containerStyle, backgroundColor: '#EAAA3B', borderRadius: 10}}>
                        <Text style={{...styles.headingStyle, color: 'black', fontSize: 18, marginBottom: 0, textAlign: 'center'}}>REPORT ERROR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{height: 150}}>
            </View>
            </ScrollView>
        </View>
    )
}

NotesShowScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  }

const styles = StyleSheet.create({
    headingStyle: {
        color: 'white',
        fontWeight: '800',
        fontSize: 27,
        marginBottom: 10
    },
    paraStyle: {
        color: 'white',
        opacity: 0.7,
        fontSize: 14,
        marginBottom: 10
    },
    statLabelStyle: {
        color: 'white',
        fontSize: 12,
        marginRight: 20,
        opacity: 0.5
    },
    mainStatStyle: {
        color: '#D8439C',
        fontSize: 40,
        fontWeight: 'bold'
    },
    containerStyle: {
        backgroundColor: '#000000', 
        padding: 15, 
        borderRadius: 15, 
        marginTop: 10
    }
})

export default NotesShowScreen