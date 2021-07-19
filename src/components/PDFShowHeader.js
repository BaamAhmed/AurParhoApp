import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import {BlurView} from 'expo-blur'

import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const ShowHeader = ({note, navigation}) => {
    return (
        <View style={{height: 80, position: 'absolute', alignSelf: 'stretch', zIndex: 2, width: screenWidth-20, margin: 10, borderRadius: 13, borderWidth: 3, borderColor:'#EAAA3B', overflow: 'hidden', marginTop: screenHeight*0.05}}>
            <BlurView
                tint={'dark'}
                intensity={60}
                style={{flex: 1, justifyContent: 'center'}}
            >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=> {navigation.navigate('notesShow', {note: note})}}>
                    <Entypo name="chevron-left" size={35} color="#EAAA3B" style={{marginLeft: 15, fontWeight: 'bold'}}/>
                </TouchableOpacity>
                <Text style={{color: '#EAAA3B', fontWeight: '800', fontSize: 26}}>AURPARHO</Text>
                <TouchableOpacity onPress={()=> {navigation.navigate('notes')}}>
                    <FontAwesome name="search" size={30} color="#EAAA3B" style={{marginRight: 15}} />
                </TouchableOpacity>
            </View>
            </BlurView>
        </View>
    )
}

export default ShowHeader