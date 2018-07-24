import React from "react";

import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginPage from "./src/pages/login-page/login-page";
import MainPage from "./src/pages/main-page/main-page";
import Slider from "./src/pages/slider-page/slider-page";
import Register from "./src/pages/register-page/register-page";



const Navigation = createStackNavigator({
     First:{screen:LoginPage},
     Home:{screen:MainPage},
     Register:{screen:Register},
     Slider:{screen:Slider},
})



export default Navigation
