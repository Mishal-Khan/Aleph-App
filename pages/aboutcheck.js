import React from 'react';
//import react in our code.
import {  AppRegistry, StyleSheet, Animated, View, Text, ImageBackground, Image, Button } from 'react-native';
// import all basic components
import {createStackNavigator} from 'react-navigation';

const arr = []
for (var i = 0; i < 5; i++) {
  arr.push(i)
}

class about extends React.Component{
	
 constructor () {
    super()
    this.animatedValue = []
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(0)
    })
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    const animations = arr.map((item) => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 40
        }
      )
    })
    Animated.stagger(10, animations).start()
  }


render(){
  const animations = arr.map((a, i) => {
      return 
            <Animated.View key={i} style={{opacity: this.animatedValue[a], height: 20, width: 20, backgroundColor: 'red', marginLeft: 3, marginTop: 3}} />
  
       })

  return(
<View style={styles.container}>
<Text> about </Text>
{animations}

<Button
title= "Screen1"
onPress={()=>this.props.navigation.goBack()}
/>
</View>
    );
}

}
export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'row',
    flexWrap: 'wrap',
  paddingTop: 5,
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'center',
  },

});
AppRegistry.registerComponent('animations', () => animations);
/*
<Animated.View 
    style={{ transform: [{scale: scaleText}] }}>
    <Text>Welcome</Text>
  </Animated.View>
*/