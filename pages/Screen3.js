//This is an example code for Navigation Drawer with Custom Side bar//
import React from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

export default class Screen3 extends React.Component {
  //Screen3 Component
  static navigationOptions={
  title:'Screen3',
};
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen {global.currentScreenIndex + 1} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});