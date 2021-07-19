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
        <View style={{flex: 1, backgroundColor: '#1D1D1D', paddingHorizontal: 10}}>
            <CustomHeader navigation={navigation} />
            <ScrollView style={{paddingTop: screenHeight*0.17}}>

            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <View style={{...styles.containerStyle, flex: 2, marginRight: 5, marginTop: 0}}>
                    <Text style={styles.headingStyle} >About Me</Text>
                    <Text style={{...styles.paraStyle, marginBottom: 0}} >Hello! Bassam here. I'm an AS student currently enrolled in Nixor College and this is my spare-time-creative-and-technical-and-helpful project!</Text>
                </View>
                <Image style={{flex: 1, marginLeft: 5}} source={{uri:'https://i.ibb.co/MsxZLh0/Untitled-Artwork-1.png'}}/>
                
                    
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                {/* <Image style={{flex: 1, marginLeft: 5}} source={{uri:'https://i.ibb.co/4P4PvG7/Untitled-Artwork-2.png'}}/> */}
                <View style={{...styles.containerStyle, flex: 2, marginRight: 5, marginTop: 0}}>
                    <Text style={{...styles.headingStyle, textAlign: 'right'}} >The Beginning</Text>
                    <Text style={{...styles.paraStyle, marginBottom: 0, textAlign: 'right'}} >This project essentially started as me being too lazy to send numerous people the individual notes that they wanted. From hybridization in AS Chemistry to Specialisation and Trade in O Levels Economics, sending PDFs on WhatsApp eventually became too tedious. So I made AurParho, essentially a "hub" for my notes, so that I could help more people with less effort.</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                {/* <Image style={{flex: 1, marginLeft: 5}} source={{uri:'https://i.ibb.co/4P4PvG7/Untitled-Artwork-2.png'}}/> */}
                <View style={{...styles.containerStyle, flex: 2, marginRight: 5, marginTop: 0}}>
                    <Text style={{...styles.headingStyle}} >My Mission</Text>
                    <Text style={{...styles.paraStyle, marginBottom: 0}} >Simply put, to make your life easier. The last two years have already had a massive impact on our day-to-day lives. Whether you felt this in the form of added academic pressure, increased mental stress, or the worst of all, loss of a loved one, we have all been deeply affected by this worldwide problem. Hence, AurParho was created to provide some sort of relief, however small and insignificant it may be, from the academic pressure experienced by students everywhere.</Text>
                </View>
            </View>
            
            <View style={{...styles.containerStyle, flex: 2, marginRight: 5, marginTop: 0}}>
                <Text style={{...styles.headingStyle}} >Help Out</Text>
                <Text style={{...styles.paraStyle, marginBottom: 0}} >Did you like what we do? If yes, then please let us know through the contact form. Hearing from people that found this website helpful would be the best motivation for me to continue developing stuff like this. Heck, fill out the contact form just to say hi! If you really like what we do, then consider donating.</Text>
                <TouchableOpacity onPress={()=>{Linking.openURL('https://ko-fi.com/baamahmed?__cf_chl_jschl_tk__=cf46f056058fb113bfc2f488ba2720d1bdc21898-1623973609-0-ARpSwDkYN2CA2I8A8j8OteOcBBWLdmjurvq9fOGJQIKfm_4fhBSdnotC-jhTaeM7mOHwow2xEQXEhjeubxhBEb7cs2hdJBE327zpgluEGULSS307i0C55vdVd2HMN5NS7zIc3_bm5zMU8HBKr54WwvIcVfjvn880BZNfwb0hjjCG_IsupFBjpj5k_D2uEEIOzLHc7G8joU8jGRVJquUKNoWcXwwgQvSpFU6bmDr9hDmoe4_0oN3Z7iHHuF4X9F8CWevsNrT7gIdHR0KK23cdoNnHF3Ok7Laq6IpZz59eANJ0LOxzaDAOpExkmMwLzdrlyOVPre4tyqAmB94l_h0olIkzlGsYeYG7g8zKsZGDCxNt5bX1IqLgMQjUoK102GCojjBJQadztokKaPX57zWYKnSCuxiwMOQtwUh-CCA8pD1dnJX1a8_uTEI2FDY-5ttFJ15l4-hp0gvoG5w61uD82c8')}}>     
                    <View style={{...styles.containerStyle, backgroundColor: '#EAAA3B', borderRadius: 10}}>
                        <Text style={{...styles.headingStyle, color: 'black', marginBottom: 0, fontSize: 18, textAlign: 'center'}}>DONATE</Text>
                    </View>
                </TouchableOpacity>
            </View>
                

        
                
                <View style={{height: 130}}>

                </View>
            </ScrollView>
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