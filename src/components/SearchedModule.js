import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const SearchedModule = ({navigation, note}) => {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate('notesShow', {note: note})}}>

        <View style={styles.containerStyle}>
            <View style={{flexDirection: 'row', height: 130}}>
                <View style={{flex: 2}}>
                    <Image style={{flex: 1, borderRadius: 10, borderColor: '#EAAA3B', borderWidth: 3}} source={{uri:note.image}}/>
                </View>
                <View style={{flex: 4, justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{...styles.headingStyle, fontSize: 20, marginLeft: 10, textTransform: 'uppercase'}}>{note.title}</Text>
                    </View>
                    <View>
                        <Text style={{...styles.headingStyle, color: '#EAAA3B', fontWeight: '300' , textTransform: 'uppercase', fontSize: 20, marginLeft: 10}}>{note.subject}</Text>
                    </View>
                </View>

                {note.grade === "ALevels" ? 
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>AL</Text>
                </View>
                : 
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={{...styles.headingStyle, color: '#EAAA3B'}}>OL</Text>
                </View>
                }
            </View>
        </View>
        </TouchableOpacity>

    )
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

export default SearchedModule