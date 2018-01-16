/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";

import api from '../../common/api'
import CityScene from "../City/CityScene";
export default class FoodWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "",
            cityName: '123123122'
        }
    }

    render() {
        
        return (
            <View >
                <TouchableOpacity style={styles.container} onPress={() => {
                    this.props.navigation.navigate('CityScene',
                        {
                            // 跳转的时候携带一个参数去下个页面
                            callback: (data) => {
                               this.setState({
                                   cityName:data,
                               })
                            }
                        });


                }}>
                    <View style={styles.wrap}>
                        <Image source={require('../../img/Food/weather.png')} style={styles.weatherIcon}/>
                        <Text>{this.state.weather + '°'}</Text>
                    </View>
                    <Text style={{marginLeft: -10, fontSize: 12,}}>{this.state.cityName}</Text>
                    <Image style={{width: 16, height: 16, marginLeft: 2}}
                           source={require('../../img/Common/icon_down.png')}/>
                </TouchableOpacity >
            </View >)
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
        console.log('1111')
        this.getWeather();
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
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
