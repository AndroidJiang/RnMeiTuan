/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

import color from "../../common/color";
import {screen, system} from '../../common/common'
import FoodWeather from "./FoodWeather";
import NavigationItem from "../../widget/NavigationItem";
/*
 * 自定义首页的导航头
 * */
export default class FoodSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FoodWeather ref='cityId' navigation={this.props.navigation}/>
                <TouchableOpacity style={styles.searchBar} onPress={this.searchClick}>
                    <Image source={require('../../img/search_icon.png')} style={styles.searchIcon}/>
                    <Text>美食搜索</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    alert('右标题')
                }}>
                    <Image source={require('../../img/icon_navigationItem_message_white.png')}
                           style={styles.searchIcon}/>
                </TouchableOpacity>
            </View>
        )
    }

    searchClick = () => {
        this.props.navigation.navigate('SearchScene');
    }

}
// define your styles
const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.theme,
    },
    back: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        flex: 1,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginLeft: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});