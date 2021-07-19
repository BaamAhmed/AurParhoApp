import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput} from 'react-native'
import {BlurView} from 'expo-blur'

import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height

const screenWidth = Dimensions.get('window').width


const SearchHeader = ({value, searchFilter, navigation, findSearchedNotes}) => {
    const [moreFilters, setMoreFilters] = useState(false)

    return (
        <View style={{position: 'absolute', alignSelf: 'stretch', zIndex: 2, width: screenWidth-20}}>

        <View style={{height: 80, position: 'absolute', alignSelf: 'stretch', zIndex: 2, width: screenWidth-20, margin: 10, borderRadius: 13, borderWidth: 3, borderColor:'#EAAA3B', overflow: 'hidden', marginTop: screenHeight*0.05}}>
            <BlurView
                tint={'dark'}
                intensity={70}
                style={{flex: 1, justifyContent: 'center'}}
            >
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=> {navigation.openDrawer()}}>
                    <Entypo name="menu" size={35} color="#EAAA3B" style={{marginLeft: 15, fontWeight: 'bold'}} />
                </TouchableOpacity>
                <View style={{flex: 1, padding: 10}}>

                <TextInput placeholder={'Search here'} value={value} onChangeText={(text)=> searchFilter(text)} placeholderTextColor={'rgba(255,255,255,0.3)'} style={{color: 'white', fontSize: 18}}/>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="search" size={30} color="#EAAA3B" style={{marginRight: 15}} />
                </TouchableOpacity>
            </View>
            </BlurView>
        </View>
            <View style={{position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.85)' , alignSelf: 'stretch', zIndex: 2, width: screenWidth-20, margin: 10, borderRadius: 13, overflow: 'hidden', marginTop: 110}}>
                
                <View style={{padding: 15}}>   
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color: '#EAAA3B', fontSize: 18}}>More Filters</Text>
                        <TouchableOpacity onPress={()=>{setMoreFilters(!moreFilters)}}>
                            <Entypo name="chevron-down" size={30} color="#EAAA3B" />
                        </TouchableOpacity>
                    </View>
                    {moreFilters ?
                    <View style={{height: 100, flex: 1}}>
                        <Text>random</Text>
                    </View> : null}
                </View>

            </View>
        </View>

    )
}

export default SearchHeader