import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, RefreshControl, Dimensions, Linking, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import useGetRecentNotes from '../hooks/useGetRecentNotes'
import useGetAnnouncements from '../hooks/useGetAnnouncements'
import CustomHeader from '../components/CustomHeader'
import RecentModule from '../components/RecentModule'

const screenHeight = Dimensions.get('window').height

const HomeScreen = ({navigation})=> {
    const [findRecentNotes, recentNotes] = useGetRecentNotes()
    const [findAnnouncements, Announcements] = useGetAnnouncements()
    useEffect(()=> {findRecentNotes()}, [])
    useEffect(()=> {findAnnouncements()}, [])
    // console.log(recentNotes)
    return (
        <View style={{flex: 1, backgroundColor: '#1D1D1D', paddingHorizontal: 10}}>
            <CustomHeader navigation={navigation} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingTop: screenHeight*0.16}}>
                
                <View style={styles.containerStyle}>
                    <View style={{flexDirection: 'row'}}>
                     <Text style={styles.headingStyle}>Welcome to </Text>
                     <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>AurParho!</Text>

                    </View>
                    <Text style={styles.paraStyle}>Digital, and yet handwritten. Colorful, yet meaningfully so. These are the next-level notes you need when textbooks and your teacher's notes just won't cut it, made available by students, for students.</Text>
                </View>

                <View style={styles.containerStyle}>
                    <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>Announcements</Text>
                    {Announcements[0] ? <Text style={styles.paraStyle}>{Announcements[0].text}</Text>: null}
                    {Announcements[1] ? <Text style={styles.paraStyle}>{Announcements[1].text}</Text>: null}
                    {Announcements[2] ? <Text style={styles.paraStyle}>{Announcements[2].text}</Text>: null}
                    {/* <Text style={styles.paraStyle}>Videos! Some notes now have explanatory videos. If a note has an available video, you'll see a 'Watch Video' option alongside the download option.</Text> */}
                </View>
                <View style={styles.containerStyle}> 
                    <Text style={styles.headingStyle}>Recent Notes</Text>
                    {recentNotes[0] ? 
                        <RecentModule navigation={navigation} note={recentNotes[0]} />
                    : <ActivityIndicator style={{marginVertical: 30}} animating={true} size="large" color="#EAAA3B" />}
                    {recentNotes[1] ? 
                        <RecentModule navigation={navigation}  note={recentNotes[1]} />
                    : null}
                    {recentNotes[2] ? 
                        <RecentModule navigation={navigation}  note={recentNotes[2]} />
                    : null}
                    {recentNotes[3] ? 
                        <RecentModule navigation={navigation}  note={recentNotes[3]} />
                    : null}
                    
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