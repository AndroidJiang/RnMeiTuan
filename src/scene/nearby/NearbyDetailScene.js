/**
 * Created by liuyan on 2018/1/11.
 */
import React, {Component} from 'react';

import {
    View, Image, Text, StyleSheet, Dimensions, StatusBar, ScrollView, ListView, ImageBackground, TouchableOpacity,
    PixelRatio, Linking,
} from 'react-native';
import {screen, api} from '../../common/common';
import {recommendUrl} from "../../common/api";
import StarRating from 'react-native-star-rating';
export default class NearbyDetailScene extends Component {
    static navigationOptions = ({navigation}) => {
        const data = navigation.state.params.data;
        let item = JSON.parse(data);
        let title = item.name;
        return {
            headerTitle: `商家详情`,
        }
    };

    constructor(props) {
        super(props);

    }

    render() {
        const {state} = this.props.navigation;
        const data = state.params.data;
        let item = JSON.parse(data);
        let imgUrl = item.frontImg.replace('w.h', '480.0');
        let phone = item.phone;
        let index = phone.indexOf('/');
        if (index !== -1) {
            phone = phone.substring(0, index);
        }
        console.log(imgUrl);
        let count = Math.ceil(Math.random() * 20);
        let avgScore = item.avgScore;
        let score = Math.round(avgScore);
        return (
            <ScrollView style={{flex: 1}}>
                <ImageBackground style={{width: screen.width, height: screen.width * 0.6}} source={{uri: imgUrl}}
                >

                    <View style={{
                        width: 75,
                        height: 75,
                        borderRadius: 100,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        position: 'absolute',
                        bottom: 15,
                        right: 15,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../img/Common/icon_image.png')} style={{width: 20, height: 20}}/>
                        <Text style={{fontSize: 16, color: 'white', marginTop: 4}}>{count}张</Text>
                    </View>
                </ImageBackground>

                <View style={{
                    backgroundColor: 'white',
                    height: 80,
                    borderBottomWidth: 1,
                    borderBottomColor: '#f4f4f4',
                    paddingLeft: 15,

                }}>
                    <Text style={{lineHeight: 40, fontSize: 20,color:'#4c4c4c'}} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                        <StarRating
                            disabled={true}
                            emptyStar={require('../../img/Common/dp_ad_icon_star_small_gary.png')}
                            fullStar={require('../../img/Common/dp_ad_icon_star_small.png')}
                            maxStars={5}
                            rating={score}
                            starSize={18}
                        />
                        <Text style={{fontSize: 14, color: '#f1a13b', marginLeft: 8}}>{avgScore}分</Text>
                        <Text style={{
                            fontSize: 14,
                            marginLeft: 12,
                            color: 'gray'
                        }}>人均：¥{item.avgPrice}</Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 8,
                        paddingTop: 10,
                        paddingBottom: 10,
                        minHeight: 60,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f4f4f4',
                    }}>
                    <Image style={{width: 16, height: 16,}} source={require('../../img/Common/icon_location.png')}/>

                    <Text numberOfLines={2}
                          style={{
                              fontSize: 16,
                              marginLeft: 8,
                              width: screen.width * 0.75,
                              color:'#4c4c4c'
                          }}>{item.addr}</Text>

                    <View style={{backgroundColor: '#f4f4f4', height: 30, width: 1, marginLeft: 6}}></View>

                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => {
                                          Linking.openURL('tel:' + phone).catch(err => console.error('An error occurred', err));
                                      }}
                                      style={{
                                          flex: 1,
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'center'
                                      }}>
                        <Image style={{width: 20, height: 20}}
                               source={require('../../img/Common/icon_call.png')}/>
                    </TouchableOpacity>

                </View>
                {
                    item.isWaimai === 1 ? <View
                        style={{
                            height: 40,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 8,
                        }}
                    >
                        <Image style={{width: 20, height: 20}} source={require('../../img/Common/icon_waimai.png')}/>
                        <Text style={{fontSize: 14, marginLeft: 8}}>外卖</Text>
                        <Image style={{width: 9, height: 16, position: 'absolute', right: 15}}
                               source={require('../../img/Common/buy_icon_arrow_right.png')}/>
                    </View> : item.isQueuing === 1 ? <View style={{
                        height: 40,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 8,
                    }}>

                        <Image style={{width: 20, height: 20}} source={require('../../img/Common/icon_paidui.png')}/>
                        <Text style={{fontSize: 14, marginLeft: 8}}>排队</Text>
                        <Image style={{width: 9, height: 16, position: 'absolute', right: 15}}
                               source={require('../../img/Common/buy_icon_arrow_right.png')}/>
                    </View> : <View></View>

                }

            </ScrollView>
        );
    }
}