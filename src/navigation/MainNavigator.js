/**
 * Created by liuyan on 2017/12/26.
 */
import React ,{Component}from 'react';
import {TabNavigator} from 'react-navigation';

import NewsScene from "../scene/News/NewsScene";
import TabBarItem from "../widget/TabBarItem";
import {FoodNewScene} from "../scene/FoodNew/FoodNewScene";
import NearbyScene from "../scene/nearby/NearbyScene";
import color from "../common/color";
import common from "../common/screen";
import MineScene from '../scene/Mine/MineScene';
const Main = TabNavigator({

    Food: {
        screen: FoodNewScene,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '美食',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/ic_vector_home_normal.png')}
                    selectedImage={require('../img/ic_vector_home_pressed.png')}
                />
            ),
        }),
    },
    NearBy: {
        screen: NearbyScene,
        navigationOptions: () => ({
            tabBarLabel: '附近',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/ic_vector_nearby_normal.png')}
                    selectedImage={require('../img/ic_vector_nearby_pressed.png')}
                />
            )
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
                    normalImage={require('../img/ic_vector_discover_normal.png')}
                    selectedImage={require('../img/ic_vector_discover_pressed.png')}
                />
            ),
        }),
    },
    OrderScene: {
        screen: NewsScene,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '订单',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/ic_vector_order_normal.png')}
                    selectedImage={require('../img/ic_vector_order_pressed.png')}
                />
            ),
        }),
    },
    MineScene: {
        screen: MineScene,
        navigationOptions: ({navigation, screenProps}) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/ic_vector_mine_normal.png')}
                    selectedImage={require('../img/ic_vector_mine_pressed.png')}
                />
            ),
        }),
    },


}, {
    borderTopWidth:common.onePixel,
    tabBarPosition: 'bottom',
    initialRouteName: 'Food',
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
        activeTintColor: color.theme, // 文字和图片选中颜色
        inactiveTintColor: '#888888',
        showLabel: true,
        showIcon: true,
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