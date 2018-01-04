/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,StyleSheet} from "react-native";

import color from "../../common/color";
import { screen, system } from '../../common/common'
export default class FoodMenu extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>menu</Text>
            </View>
        )
    }


}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.width * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});