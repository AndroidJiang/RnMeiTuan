/**
 * Created by liuyan on 2017/12/26.
 */
import React from 'react';
import {TabNavigator} from 'react-navigation';

import HomeView from '../scene/Home';
import TypeView from '../scene/Type';
import AboutView from '../scene/About';
import {Image, View} from "react-native";

const App = TabNavigator({
    Home: {
        screen: HomeView,
    },

    Type: {
        screen: TypeView,
    },

    About: {
        screen: AboutView,
    },
}, {
    tabBarPosition: 'bottom',
    lazy: true,
    initialRouteName: 'Home',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: '#00aaf6', // 文字和图片选中颜色
        inactiveTintColor: '#888888',
        showLabel:true,
        showIcon:true,
        style: {
            height: 55,
            backgroundColor: '#ffffff',
        },
        labelStyle: {
            fontSize: 12,
            marginTop: 2
        }
        ,
        tabStyle: {
            backgroundColor: 'white'
        }
    }

});

export default App;