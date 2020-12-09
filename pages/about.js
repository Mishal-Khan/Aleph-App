import React from 'react';
//import react in our code.
import { StyleSheet, View, Text, ImageBackground, Image, Button } from 'react-native';
// import all basic components
import {createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';


class aboutscreen extends React.Component{
static navigationOptions={
  title:'aboutscreen',

};

render(){
  return(
<View style={styles.container}>
<Text> about </Text>
<Button
title= "Screen1"
onPress={()=>this.props.navigation.goBack()}
/>
</View>
    );
}

}
export default aboutscreen;