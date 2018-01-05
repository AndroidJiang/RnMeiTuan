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
export class FoodNewScene extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Food/search_icon.png')} style={styles.searchIcon}/>
                <Text style={styles.searchInput}>美食搜索</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <NavigationItem
                icon={require('../../img/Food/icon_navigationItem_message_white.png')}
                onPress={() => {

                }}
            />
        ),
        headerLeft: (
            <FoodWeather/>
        ),
        headerStyle: {backgroundColor: color.theme},
    })


    render() {
        return (
                <View style={styles.container}>
                    <FoodBanner />

                    <FoodMenu />
                </View>
        )
    }


}
// define your styles
const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
       flex:1,
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
        flexDirection:'row',
        width: screen.width * 0.6,
        height: 30,
        borderRadius: 19,
        backgroundColor: 'white',
        position:'absolute',
        left:0,
        alignItems:'center',
        marginLeft:30,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    searchInput: {
        width: screen.width * 0.6,

        height: 40,


    },
});