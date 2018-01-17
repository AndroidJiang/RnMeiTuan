import React, {Component, PureComponent} from 'react';
import {View, Image, Text, TouchableOpacity,Alert} from 'react-native';

export default class MyItemView extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let {icon, title} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.8} style={{height: 60,alignItems:'center',justifyContent:'center'}} onPress={()=>{
                Alert.alert(title);
            }}>
                <Image source={icon} style={{width: 20, height: 20}}/>
                <Text style = {{marginTop:5}}>{title}</Text>
            </TouchableOpacity>
        );
    }
}