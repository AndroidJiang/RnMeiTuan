/**
 * Created by liuyan on 2018/1/12.
 */
import React, {Component} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, FlatList, TouchableOpacity} from 'react-native';

import {api, screen} from '../../common/common';

export default class RecomendFoodView extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '推荐菜',
            headerStyle: {backgroundColor: 'white', height: 45,},
            headerTitleStyle: {color: '#444444', fontWeight: 'normal',},
            headerLeft: <TouchableOpacity activeOpacity={0.8} style={{marginLeft: 10}} onPress = {()=>{
                navigation.goBack();
            }}>
                <Image source={require('../../img/Common/icon_back_dark.png')} style={{width: 26, height: 26}}/>
            </TouchableOpacity>,
            headerRight: <View activeOpacity={0.8} style={{marginRight: 10, width: 26, height: 26}}>
            </View>
        }
    };

    constructor(porps) {
        super(porps);
        this.state = {
            dataSource: [],
            isRefreshing: false,
        }
    }

    render() {
        return (
            <View></View>
        );
    }
}