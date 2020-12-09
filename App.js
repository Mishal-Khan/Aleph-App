import React from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
  Button,
} from 'react-native';

// import all basic components
import { Ionicons } from "@expo/vector-icons";
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createSwitchNavigator, createAppContainer, createDrawerNavigator,createStackNavigator} from 'react-navigation';
//import {createDrawerNavigator} from 'react-navigation-drawer';
//import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens

import Splash from './pages/Splash';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';

//Import Custom Sidebar
//import CustomSidebarMenu from './CustomSidebarMenu';

global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends React.Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();


  };




  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        
        <TouchableOpacity 
//<Ionicons style={{marginLeft:40, fontSize:30}} name="md-home"/>,
        onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image*/} 
        <Image source= {require('./assets/d1.png')}
           

            style={{ width: 30, height: 30, marginLeft: 15, tintColor:'white'}}
         />

        </TouchableOpacity>
     

 </View>
    );
  }
}
const styles1 = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});





//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Arabic Learning',
   headerLeft: 
// <Ionicons style={{marginLeft:40, fontSize:30}} name="md-home"/>,

    <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Playing Games',
      headerLeft:  //<Ionicons style={{marginLeft:50, backgroundColor:'blue'}} name="md-home"/>,

      <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: 
        <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
    }),
  },
});


//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
 {
//NavScreen1:{
  //screen : homescreen,
//  navigationOptions: {
        //drawerLabel: 'Demo Screen 2',
       // headerRight:()=>( <Button
          //    onPress={() => alert('This is a button!')}
        //      title="Info"
      //        color="blue"
    //        />),
  //    },

//},
    //Drawer Optons and indexing
      NavScreen1: {
      screen: FirstActivity_StackNavigator,

      navigationOptions: {
        drawerLabel: 'Learning Mode ',
 drawerIcon: ()=>(
<Ionicons name= "md-body" size={32} color= "black" />
      ),  

      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Playing Mode',
    drawerIcon: ()=>(  
      <Image source= {require('./assets/game.png')}
           

            style={{ width: 30, height: 30, marginLeft: 15}}
         />
),
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'About us',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
  //  contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);



function abc() {
  // body...
  const App2 = createAppContainer(DrawerNavigatorExample);
//export default App2;
}
const AppSwitchNavigator = createSwitchNavigator({
'Splash' : {screen : Splash},
'Drawer' : {screen : DrawerNavigatorExample}
},
{
initialRouteName : 'Splash' // Telling the navigator that the first       // route is Splash screen
})
//export default createAppContainer(DrawerNavigatorExample);
const App2 = createAppContainer(AppSwitchNavigator);

//_onItemPressed(App2);


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});




//const AppContainer = createAppContainer(Stackcontainer);

//const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return ( 
  //<AppContainer/>,
  <App2/>
      );}}
