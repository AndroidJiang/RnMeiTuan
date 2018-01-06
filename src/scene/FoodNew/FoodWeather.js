/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from "react-native";

import api from '../../common/api'

export default class FoodWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "",
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Image source={require('../../img/Food/weather.png')} style={styles.weatherIcon}/>
                    <Text>{this.state.weather + '°'}</Text>
                </View>
                <Text style={{marginLeft:-10,fontSize:12,}}>北京</Text>
            </View>
        )
    }

    getWeather = () => {
        fetch(api.weather, {
            method: 'GET',
            headers: { //header
                'Authorization': 'APPCODE bb4dd71cd14a4c7aa7ba5175971344b2'
            },
        })
            .then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
                this.setState({
                    weather: responseData.result.temp,
                });
            })
            .catch((error) => {
                alert('错误了' + error);
            })
    }

    componentDidMount() {
        this.getWeather();
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
       flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    wrap: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherIcon: {
        width: 15,
        height: 15,
        margin: 1,
    },


});