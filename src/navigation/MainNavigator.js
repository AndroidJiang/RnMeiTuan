/**
 * Created by liuyan on 2017/12/26.
 */
import React from 'react';
import {TabNavigator} from 'react-navigation';

import NewsScene from "../scene/News/NewsScene";
import FoodScene from "../scene/Food/FoodScene";
import TabBarItem from "../widget/TabBarItem";
import {FoodNewScene} from "../scene/FoodNew/FoodNewScene";
const Main = TabNavigator({
    Food: {
        screen: FoodNewScene,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '美食',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/icon_home.png')}
                    selectedImage={require('../img/tabbar/icon_home_selected.png')}
                />
            ),
        }),
    },
    NewsScene: {
        screen: NewsScene,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '新闻',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/icon_home.png')}
                    selectedImage={require('../img/tabbar/icon_home_selected.png')}
                />
            ),
        }),
    },

}, {
    tabBarPosition: 'bottom',
    lazy: true,
    initialRouteName: 'Food',
    swipeEnabled: true,
    animationEnabled: true,
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

export default Main;