import React from "react";

import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import LoginPage from "./src/pages/login-page/login-page";
import MainPage from "./src/pages/main-page/main-page";


const Navigation = createStackNavigator({
     First:{screen:LoginPage},
     Second:{screen:MainPage},

})



export default Navigation
