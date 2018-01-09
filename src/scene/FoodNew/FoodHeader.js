/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import NavigationItem from "../../widget/NavigationItem";
import {Paragraph} from "../../widget/Text";
import color from "../../common/color";
import {screen, system} from '../../common/common'
import FoodBanner from './FoodBanner'
import FoodMenu from './FoodMenu'
import FoodWeather from "./FoodWeather";
import FoodSearch from "./FoodSearch";
import api from "../../common/api";
import FoodDiscount from "./FoodDiscount";

export class FoodHeader extends Component {
    /*隐藏默认导航头，自定义*/
    static navigationOptions = ({navigation}) => ({
        header: null,
    })

    render() {
        return (
            <View style={styles.container}>
                <FoodBanner navigation={this.props.navigation}/>
                <FoodMenu menuInfos={api.menuInfo}/>
                <FoodDiscount/>
                <Text style={styles.tv}> - 猜你喜欢 - </Text>
            </View>
        )
    }


}

// define your styles
const styles = StyleSheet.create({
    contentContainer: {

    },
    container: {
        flex: 1, backgroundColor: 'white',
        borderBottomWidth:screen.onePixel,
        borderColor: color.border,
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
    tv: {
        flexDirection:'row',
        flex:1,
        color: 'gray',
        fontSize: 12,
        padding:5,
        alignSelf:'center',

    },

});