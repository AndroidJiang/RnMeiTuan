/**
 * Created by liuyan on 2017/12/25.
 */
import React, {Component} from 'react';

import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class About extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarLabel: '关于',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={{width: 20, height: 20,tintColor:tintColor}}
                       source={ require('../../app/img/icon_about.png')}/>
            )
        }
    }

    render() {
        return (
            <View></View>
        );
    }
}