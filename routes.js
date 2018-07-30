import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import LoginPage from "./src/pages/login-page/login-page";
import MainPage from "./src/pages/main-page/main-page";
import Slider from "./src/pages/slider-page/slider-page";
import Register from "./src/pages/register-page/register-page";
import Pet from "./src/pages/pet-page/pet-page";
import DrawerScreen from './src/pages/drawer-page/drawer-page';
const menuIcon = require('./src/images/menu-button.png')
const leftIcon = require('./src/images/left-arrow.png')

const Tabs = createMaterialTopTabNavigator({
    Home: MainPage,
    LoginPage: LoginPage,
    Slider: Slider,
    Register:Register,
    Pet:Pet
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Tabs
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={menuIcon}/>
    }else{
        return <Image source={leftIcon}/>
    }
}

const StackNavigator = createStackNavigator({

    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
    navigationOptions: ({ navigation }) => ({
        title: 'ReactNavigation',  // Title to appear in status bar
        headerLeft:
            <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                <MenuImage style="styles.bar" navigation={navigation}/>
            </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    })
});

export default StackNavigator;
