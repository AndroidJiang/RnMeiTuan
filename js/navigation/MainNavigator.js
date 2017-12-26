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
        screen: HomeView, navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={{width: 20, height: 20}}
                       source={focused ? require('../../app/img/icon_home_selected.png') : require('../../app/img/icon_home.png')}
                />
            )
        }
    },

    Type: {
        screen: TypeView, navigationOptions: {
            tabBarLabel: '分类',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={{width: 20, height: 20}}
                       source={focused ? require('../../app/img/icon_type_selected.png') : require('../../app/img/icon_type.png')}/>
            )
        }
    },

    About: {
        screen: AboutView, navigationOptions: {
            tabBarLabel: '关于',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={{width: 20, height: 20}}
                       source={focused ? require('../../app/img/icon_about_selected.png') : require('../../app/img/icon_about.png')}/>
            )
        }
    },

}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    initialRouteName: 'Home',
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#00aaf6', // 文字和图片选中颜色
        inactiveTintColor: '#888888',
        showIcon: true,
        pressOpacity: 0.8,
        style: {
            height: 48,
            backgroundColor: '#ffffff',
        },
        labelStyle: {
            fontSize: 10,
            marginTop: 2
        }
        ,
        iconStyle: {
            marginTop: -2
        }
        ,
        tabStyle: {
            backgroundColor: '#ffffff',
        }
        ,
    }

});

export default App;