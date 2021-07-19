import React from 'react'
import {Dimensions} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'


import HomeScreen from './src/screens/HomeScreen'
import NotesScreen from './src/screens/NotesScreen'
import NotesShowScreen from './src/screens/NotesShowScreen'
import NotePDFShow from './src/screens/NotePDFShow'
import ReportErrorScreen from './src/screens/ReportErrorScreen'
import AboutScreen from './src/screens/AboutScreen'

import SideBar from './src/screens/SideBar'


// const switchNavigator = createSwitchNavigator({
//   Splash: SplashScreen,
//   MainFlow: createDrawerNavigator({
//     PAKISTAN: PakistanScreen,
//     USA: USAScreen
//   })
// })

const screenHeight = Dimensions.get("window").height

const navOptions = ({navigation}) => {
  return {
    headerLeft: ()=> <LeftIcon navigation={navigation} />,
    headerRight: ()=> <RightIcon navigation={navigation} />,
    headerTitle: () => <Header/>,
    headerStyle: {
      backgroundColor: '#D8439C',
      height: screenHeight * 0.12
    },
    headerShown: false
  }
}

const drawerNav = createDrawerNavigator({
  HOME: {
    screen: createStackNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: navOptions
      }
    })
  },
  NOTES: {
    screen: createStackNavigator({
      notes: {
        screen: NotesScreen,
        navigationOptions: navOptions
      },
      notesShow: {
        screen: NotesShowScreen,
        navigationOptions: navOptions
      },
      notesPDF: {
        screen: NotePDFShow,
        navigationOptions: navOptions
      }
    })
  },
  'CONTACT US': {
    screen: createStackNavigator({
      ContactUs: {
        screen: ReportErrorScreen,
        navigationOptions: navOptions
      }
    })
  },
  ABOUT: {
    screen: createStackNavigator({
      About: {
        screen: AboutScreen,
        navigationOptions: navOptions
      }
    })
  }
},{
  contentComponent: SideBar,
  drawerBackgroundColor: 'transparent'
})

// const switchNav = createSwitchNavigator({
//   Splash: SplashScreen,
//   MainFlow: drawerNav
// })

const App = createAppContainer(drawerNav)
export default () => {
  return <App/>
}