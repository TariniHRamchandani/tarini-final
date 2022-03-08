import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform, 
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  
} from 'react-native';
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import DetailsScreen from "./screens/Details"
import HomeScreen from "./screens/Home"

 

export default class App extends React.Component {
 render(){
   return(
     <View>

<AppContainer/>

     </View>
   )
 } 


}

const AppNavigator= createSwitchNavigator({
  Home:HomeScreen,
  Details:DetailsScreen
})

const AppContainer= createAppContainer(AppNavigator)