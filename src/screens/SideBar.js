import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import {BlurView} from 'expo-blur'


const SideBar = (props) => {
    return (
            
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, margin: 10, borderWidth: 3, borderColor: '#EAAA3B', borderRadius: 15, overflow: 'hidden'}}>
                <BlurView
                    intensity={70}
                    tint={'dark'}
                    style={{flex: 1}}
                >


                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{fontSize: 37, color: '#F8B035', fontWeight: '800'}}>AURPARHO</Text>
                </View>
                
            
                <View style={{padding: 20}}>
                    <ScrollView>
                        <DrawerItems
                            // itemsContainerStyle={{alignItems: 'stretch'}}
                            itemStyle={{borderRadius: 10, flexDirection: 'row', justifyContent: 'flex-end'}}
                            activeBackgroundColor='#F8B035'
                            activeLabelStyle={{color: '#000000', fontSize: 20, fontWeight: '800'}}
                            labelStyle={{textAlign: 'right', fontSize: 20, color: '#F8B035', fontWeight: '800'}}
                            {...props}
                            />
                    </ScrollView>

                </View>
                </BlurView>

            </View>
        </SafeAreaView>
            
    )
}

const styles = StyleSheet.create({

})

export default SideBar