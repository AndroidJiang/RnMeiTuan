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
export class FoodNewScene extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/Food/search_icon.png')} style={styles.searchIcon}/>
                <Paragraph></Paragraph>
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
            <NavigationItem
                title='北京'
                titleStyle={{color: 'white'}}
                onPress={() => {

                }}
            />
        ),
        headerStyle: {backgroundColor: color.theme},
    })


    render() {
        return (
                <View style={styles.container}>
                    <FoodBanner />

                    {/*<FoodMenu />*/}
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