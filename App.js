import React from "react";

import LoginPage from "./src/pages/login-page/login-page";
import MainPage from "./src/pages/main-page/main-page";
import Slider from "./src/pages/slider-page/slider-page";
import Register from "./src/pages/register-page/register-page";
import SideBar from "./src/pages/sidebar/sidebar.js";
import { createDrawerNavigator } from "react-navigation";

const Navigation = createDrawerNavigator(
    {
        First:{screen:LoginPage},
        Home:{screen:MainPage},
        Register:{screen:Register},
        Slider:{screen:Slider},
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default Navigation;

