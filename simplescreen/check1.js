//This is an example code for Navigation Drawer with Custom Side bar//
import React from 'react';
//import react in our code.
import { Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button } from 'react-native';
// import all basic components
import {createSwitchNavigator, createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';


import { Col, Row, Grid } from "react-native-easy-grid";
import {LinearGradient} from 'expo-linear-gradient';
//import Screen1 from 'pages/Screen1';
//import SoundPlayer from 'react-native-sound-player'
//import { playButton1 } from './audio';
class check1 extends React.Component {
  //Screen1 Component
  //static navigationOptions={
 // title:'Screen1',
//};

 static navigationOptions = {
        header: null
    };
/*playSong() {
    try {
     SoundPlayer.playUrl('https://www.islamcan.com/learn-arabic/arabic-alphabets/001-alif.mp3')
        console.log('play the song file')
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  };
*/
  render() {
const { navigate } = this.props.navigation;
//function about({ navigation })
    return (

<View  style={styles.mainContainer}>

<View style={styles.mainheader}>
        <TouchableOpacity activeOpacity={1}
onPress={() =>this.props.navigation.navigate('Screen1')}
        //  navigate('zabr')}        
        >     
 <Image 
source= {require('../assets/home.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{ borderRadius:200,  height:50,  width:50,  marginTop:11, marginLeft:5}}       />
 </TouchableOpacity>

<TouchableOpacity activeOpacity={1}
onPress={() =>this.props.navigation.navigate('check2')}        //  navigate('zabr')}         
 >     
 <Image 
source= {require('../assets/next.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 3, height:62,  width:100, marginLeft:200, marginTop:10}}       />
 </TouchableOpacity>
  
</View>

<View >
<Grid>
    <Col style={{ width: 100 }}>


      <TouchableOpacity activeOpacity={1}
onPress={() =>
          navigate('') }         
>     


 <Image 
 source= {require('../assets/play.png')}
 style={{marginLeft:10, marginTop:80, borderWidth: 1, borderRadius:200, height : 60, width:60, backgroundColor:'blue',
  flexDirection:'row',
 }}       />

      </TouchableOpacity>
 

<TouchableOpacity activeOpacity={0.5}
onPress={()  =>
          navigate('') }         
>     
 <Image 
 source= {require('../assets/mic.png')}
 style={{  marginLeft:10,marginTop:180, borderWidth: 3, borderColor:'blue', borderRadius:200, height : 60, width:60, backgroundColor:'blue',
  
 }}       />
 </TouchableOpacity>


    </Col>

    <Col >
      

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('')}         
>     
 <Image 
 source= {require('../assets/c1.png')}
 style={{ marginTop:20, borderWidth: 2, borderRadius:20, borderColor:'cyan', height : 360, width:260, backgroundColor:'blue',
   
 }}       />
 </TouchableOpacity>
    </Col>
</Grid>


</View>


<View style={styles.footer}>


 <TouchableOpacity activeOpacity={0.5}
 //onPress={()=>navigate.push('about')}

onPress={() =>
          navigate('')}
  >     
 <Image 
  source= {require('../assets/sc1.png')}
  style={{   height : 300, width:400,   backgroundColor:'pink', marginTop: 380, 
 }}       />
 </TouchableOpacity> 
     
</View>

</View>
         );
  }
}
const Project = createStackNavigator({
 check1: {
      screen: check1,},
/*
 

        zabr: {
      screen: zabr,
 
// about: { screen: about,
 navigationOptions: {
     headerShown: false,
     header:null,
        },  },   
          zer: {
      screen: zer,
 
// about: { screen: about,
 navigationOptions: {
     headerShown: false,
     header:null,
        },  },   
*/
});
const win = Dimensions.get('window');
export default Project;


const styles = StyleSheet.create({
window:{
 flex: 1,
        //alignSelf: 'stretch',
        //alignSelf: 'center',
        justifyContent: 'center',
     

      height: 630,
        width: 370,
         borderWidth: 1,
         //marginTop:10,
    //borderRadius: 75,
    //alignSelf: 'stretch',
        //width: win.width,
       // height: win.height,
     //position: 'relative',
    resizeMode:'contain',
    backgroundColor:'white',
} , 

mainContainer: {
   flex: 1,
  backgroundColor:'cyan',
  //  flexDirection:'row',
  //paddingTop: 30,
  //  alignItems: 'center',
   // marginTop: 40,
//    marginLeft: 10,
  //  marginRight:50,
  // borderRadius:2,
    //sborderWidth:1,
//    justifyContent: 'center',
    //justifyContent: 'space-between',
  },
mainheader:{
 //flex: 1,
   flexDirection:'row',

},
row1:
{
  flexDirection:'row',
},
 row2: {
    //flex: 1,
    flexDirection:'row',
 // paddingTop: 1,
  //  alignItems: 'center',
   // marginTop: 10,
   // marginBottom:20,
    //justifyContent: 'center',
   // justifyContent: 'space-between',
  },

  footer:{
     flexDirection:'column',
 // paddingTop: 1,
    alignItems: 'center',
  },
});


/*
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

//const AppContainer = createAppContainer(Stackcontainer);

const Project = createStackNavigator({
 Screen1: { screen: Screen1 },
 
 about: { screen: aboutscreen }
});

 <Button
         title ='h2'
      //   onPress={()=>this.props.navigation.navigate('aboutscreen')}
  onPress={() =>
          navigate('about')}
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c10.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c9.png')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
  source= {require('../assets/c8.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c7.png')}
  style={{    borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c6.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c15.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c14.png')}
 style={{  borderWidth: 2, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
  source= {require('../assets/c13.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c12.png')}
  style={{    borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c11.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c20.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c19.png')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
  source= {require('../assets/c18.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c17.png')}
  style={{    borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c16.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c24.png')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
  source= {require('../assets/c23.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c22.png')}
  style={{    borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c21.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
      
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
//source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
        
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
// source= {require('../assets/c9.png')}
 style={{  borderWidth: 3, borderRadius: 100, height : 50, width:60,    
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
  source= {require('../assets/c28.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
 source= {require('../assets/c27.png')}
  style={{    borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>
          navigate('about')}         
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
source= {require('../assets/c26.png')}
  style={{   borderWidth: 3, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>








*/