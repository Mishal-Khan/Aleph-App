//This is an example code for Navigation Drawer with Custom Side bar//
import React,{useState}  from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { TouchableWithoutFeedback,  } from 'react-native';
//import Sound from 'react-native-sound';// import all basic components


//import { playButtonPress } from '../simplescreen/audio';


export default class Screen2 extends React.Component {
  
 /*playSound() {
    const mySound = new Sound(uri('https://www.islamcan.com/learn-arabic/arabic-alphabets/001-alif.mp3'), Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', mySound.getDuration());
        mySound.play();
      }
    });
  }

*/
  //Screen2 Component
  static navigationOptions={
  title:'Screen2',
};
  render() {
    return (
      <View style={styles1.MainContainer}>


      <TouchableWithoutFeedback onPress={this.playSound.bind(this)}>
         <Text>Play Sound!</Text>
      </TouchableWithoutFeedback>
  



        <Text style={{ fontSize: 23 }}> Screen {global.currentScreenIndex + 1} </Text>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});