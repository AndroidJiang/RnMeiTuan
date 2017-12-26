/**
 * Created by liuyan on 2017/12/25.
 */
import React, {Component} from 'react';

import {View, Image, Text, StatusBar, AsyncStorage} from 'react-native';

var typeIds = [];
var typeNames = [];

export default class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '首页',
            headerStyle: {height: 48, backgroundColor: '#00aaf6'},
            headerTitleStyle: {alignSelf: 'center', fontSize: 22, color: 'white', fontWeight: 'normal'},
            headerRight: <Text style={{width: 25, height: 25, marginRight: 10}}></Text>,
            headerLeft: <Text style={{width: 25, height: 25, marginLeft: 10}}></Text>,
        };
    };

    constructor(props) {
        super(props);
        AsyncStorage.multiGet(['data', 'name'], (error, result) => {
            typeIds = JSON.parse(result[0][1]);
            typeNames = JSON.parse(result[1][1]);
        })
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#0E99F6' translucent={false} hidden={false}/>
            </View>
        );
    }
}