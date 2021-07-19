import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, RefreshControl, Dimensions, Linking, TouchableOpacity, Image} from 'react-native'
import useGetRecentNotes from '../hooks/useGetRecentNotes'
import CustomHeader from '../components/CustomHeader'

const screenHeight = Dimensions.get('window').height

const HomeScreen = ({navigation})=> {
    const [findRecentNotes, recentNotes] = useGetRecentNotes()
    useEffect(()=> {findRecentNotes()}, [])
    // console.log(recentNotes)
    return (
        <View style={{flex: 1, backgroundColor: '#1D1D1D', paddingHorizontal: 10, paddingTop: screenHeight*0.17}}>
            <CustomHeader navigation={navigation} />
            
                <View style={styles.containerStyle}>
                    <View style={{flexDirection: 'row'}}>
                     <Text style={styles.headingStyle}>Report an </Text>
                     <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>Error</Text>

                    </View>
                    <Text style={styles.paraStyle}>Use the following form if you want to report any issues with any of the notes, if you want to give feedback on the website, or if you just wanna say hi!</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://aurparho.herokuapp.com/notes/contactus')}}>
                        
                    <View style={{...styles.containerStyle, backgroundColor: '#EAAA3B', borderRadius: 10}}>
                        <Text style={{...styles.headingStyle, color: 'black', marginBottom: 0, fontSize: 18, textAlign: 'center'}}>REPORT ERROR</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerStyle}>
                    <View style={{flexDirection: 'row'}}>
                     <Text style={styles.headingStyle}>Request a </Text>
                     <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>Note</Text>

                    </View>
                    <Text style={styles.paraStyle}>Didn't find what you were looking for? Don't worry. Just fill the form below and we'll add it in no time!</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://aurparho.herokuapp.com/notes/requestnote')}}>
                        
                    <View style={{...styles.containerStyle, backgroundColor: '#EAAA3B', borderRadius: 10}}>
                        <Text style={{...styles.headingStyle, color: 'black', marginBottom: 0, fontSize: 18, textAlign: 'center'}}>REQUEST NOTE</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                

        
                
                <View style={{height: 130}}>

                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#000000', 
        padding: 15, 
        borderRadius: 15, 
        marginTop: 10
    },
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
    }
})

export default HomeScreen