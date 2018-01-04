/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";

import Swiper from 'react-native-swiper';
export default class FoodBanner extends Component {
    render() {
        debugger;
        return (
            <View>
                <Swiper style={styles.wrap} height={200}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}
// define your styles
const styles = StyleSheet.create({


    wrap: {
       height:200,
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

});