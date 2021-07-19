import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, RefreshControl, Dimensions, Linking, Image, FlatList, TextInput, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useGetSearched from '../hooks/useGetSearched'
import SearchedModule from '../components/SearchedModule'
import {BlurView} from 'expo-blur'
import RNPickerSelect from 'react-native-picker-select'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


const NotesScreen = ({navigation})=> {
    const [subject, setSubject] = useState('All')
    const [grade, setGrade] = useState('All')
    const [moreFilters, setMoreFilters] = useState(false)

    const [findSearchedNotes, searchedNotes] = useGetSearched()
    // console.log(searchedNotes)
    
    const [filteredData, setFilteredData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [search, setSearch] = useState('')
    const [delay, setDelay] = useState(true)

    const fetchData = async ()=> {
        await findSearchedNotes({})
        await console.log(searchedNotes[0])
            await setFilteredData(searchedNotes)
            await setMasterData(searchedNotes)
    }

    useEffect(()=>{
        findSearchedNotes({})
    }, []) 

    if (searchedNotes[0] !== undefined && delay){
        setFilteredData(searchedNotes)
        setMasterData(searchedNotes)
        setDelay(false)
    }

    const searchFilter = (text)=> {
        if (text){
            const newData = masterData.filter((item)=> {
                if (item.title.toLowerCase().indexOf(text.toLowerCase())> -1 && ((item.subject === subject || subject === 'All') || (!subject)) && ((item.grade === grade || grade === 'All')||(!grade))){
                    return true
                } else {
                    return false
                }
            })
            setFilteredData(newData)
            // setSearch(text)
        } else {
            const newData = masterData.filter((item)=> {
                // console.log(subject)
                if (((item.subject === subject || subject === 'All') || (!subject)) && ((item.grade === grade || grade === 'All')||(!grade))){
                    return true
                } else {
                    return false
                }
            })
            setFilteredData(newData)
        }
    }

    return (
        <View style={{flex: 1, backgroundColor: '#1D1D1D', paddingHorizontal: 10}}>
            
            {/* <SearchHeader navigation={navigation} value={search} searchFilter={searchFilter} findSearchedNotes={findSearchedNotes}/> */}
            <View style={{position: 'absolute', alignSelf: 'stretch', zIndex: 2, width: screenWidth-20, height: 110}}>

                <View style={{height: 80, position: 'absolute', alignSelf: 'stretch', zIndex: 4, width: screenWidth-20, margin: 10, borderRadius: 13, borderWidth: 3, borderColor:'#EAAA3B', overflow: 'hidden', marginTop: screenHeight*0.05}}>
                    <BlurView
                        tint={'dark'}
                        intensity={70}
                        style={{flex: 1, justifyContent: 'center'}}
                    >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 4}}>
                        <TouchableOpacity onPress={()=> {navigation.openDrawer()}}>
                            <Entypo name="menu" size={35} color="#EAAA3B" style={{marginLeft: 15, fontWeight: 'bold'}} />
                        </TouchableOpacity>
                        <View style={{flex: 1, padding: 10}}>

                        <TextInput placeholder={'Search here'} value={search} onChangeText={(text)=> {
                            setSearch(text)    
                            searchFilter(search)
                            }} placeholderTextColor={'rgba(255,255,255,0.3)'} style={{color: 'white', fontSize: 18, zIndex: 4}}/>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name="search" size={30} color="#EAAA3B" style={{marginRight: 15}} />
                        </TouchableOpacity>
                    </View>
                    </BlurView>
                </View>
                <View style={{position: 'absolute', zIndex: 3, alignSelf: 'stretch', width: screenWidth, marginTop: screenHeight*0.1 + 45}}>

                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.85)' , alignSelf: 'stretch', zIndex: 1, width: screenWidth-20, margin: 10, borderRadius: 13}}>
                        
                        <View style={{padding: 15, zIndex: 3}}>   
                                <TouchableOpacity onPress={()=>{setMoreFilters(!moreFilters)}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Text style={{color: '#EAAA3B', fontSize: 18}}>More Filters</Text>
                                <Entypo name="chevron-down" size={30} color="#EAAA3B" />
                            </View>
                                </TouchableOpacity>
                            {moreFilters ?
                            <View style={{flex: 1, marginTop: 10, zIndex: 3}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, zIndex: 3}}>
                                    <Text style={{color: 'white', marginRight: 20, ...styles.headingStyle, fontSize: 24}}>SUBJECT</Text>
                                    <View style={{flex: 1, zIndex: 3}}>

                                    <RNPickerSelect
                                        
                                        style={pickerSelectStyles}
                                        placholder={{label: ''}}
                                    
                                        value={subject}
                                        onValueChange={(value) => {
                                            setSubject(value)
                                            searchFilter(search)
                                        }}
                                        items={[
                                            { label: 'All', value: 'All'},
                                            { label: 'Math', value: 'Math' },
                                            { label: 'Physics', value: 'Physics' },
                                            { label: 'Chemistry', value: 'Chemistry' },
                                            { label: 'Economics', value: 'Economics' },
                                            { label: 'Accounts', value: 'Accounts' },
                                            { label: 'Computer Science', value: 'CompSci' },
                                            { label: 'Biology', value: 'Biology' },
                                            { label: 'Further Maths', value: 'FurtherMaths' },
                                            { label: 'Islamiat', value: 'Islamiat' },
                                            { label: 'Pak History', value: 'PakHistory' },
                                            { label: 'Pak Geography', value: 'PakGeography' },
                                        ]}
                                    />
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', zIndex: 3, marginBottom: 15}}>
                                    <Text style={{color: 'white', marginRight: 20, ...styles.headingStyle, fontSize: 24}}>GRADE</Text>
                                    <View style={{flex: 1}}>

                                    <RNPickerSelect
                                        
                                        style={pickerSelectStyles}
                                        placholder={{label: 'something', value: 'Something', color: 'white'}}
                                    
                                        value={grade}
                                        onValueChange={(value) => {
                                            setGrade(value)
                                            searchFilter(search)
                                        }}
                                        items={[
                                            { label: 'All', value: 'All'},
                                            { label: 'O Levels', value: 'OLevels' },
                                            { label: 'A Levels', value: 'ALevels' },
                                        ]}
                                    />
                                    </View>
                                </View>
                                <TouchableOpacity onPress={()=> {
                                    setSubject('All')
                                    setGrade('All')
                                    setSearch('')
                                    searchFilter(search)
                                }}>
                                    <View style={{backgroundColor: '#EAAA3B', padding: 15, borderRadius: 10}}>
                                        <Text style={{color: 'black', fontWeight: '700', fontSize: 16, textAlign: 'center'}}>RESET</Text>
                                    </View>
                                </TouchableOpacity>

                            </View> : null}
                        </View>

                    </View>
                </View>
                </View>
            {searchedNotes[0] ? <FlatList
                style={{paddingVertical: screenHeight*0.24 + 10, paddingBottom: -300, flex: 1, zIndex: 1}}
                contentContainerStyle={{paddingBottom: screenHeight*0.27}}
                showsVerticalScrollIndicator={false}
                data={filteredData}
                keyExtractor={(item)=>{Math.random().toString()}}
                renderItem={({item})=>{
                    return (
                        <SearchedModule note={item} navigation={navigation}/>
                                ) 
                            }
                        } 
                        />: <ActivityIndicator style={{paddingTop: 300}} animating={true} size="large" color="#EAAA3B" />}
        </View>
    )
}

NotesScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  }
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#EAAA3B',
      borderRadius: 10,
      color: '#EAAA3B',
      paddingRight: 30, // to ensure the text is never behind the icon
      zIndex: 3
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: '#EAAA3B',
      borderRadius: 15,
      color: '#EAAA3B',
      paddingRight: 30, // to ensure the text is never behind the icon
      zIndex: 3
    },
  });

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
    },
    inputIOS: {
        backgroundColor: 'red'
    }
})

export default NotesScreen