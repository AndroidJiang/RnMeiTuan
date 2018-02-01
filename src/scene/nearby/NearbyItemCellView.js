/**
 * Created by liuyan on 2018/1/26.
 */
import React, {PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity,} from 'react-native';
import StarRating from "react-native-star-rating/star-rating";
import color from "../../common/color";
import {screen, api} from '../../common/common';

export default class NearbyItemCellView extends PureComponent {


    constructor(props) {
        super(props);
    }

    itemClick = (item) => {
        let itemStr = JSON.stringify(item);
        this.props.navigation.navigate('NearDetail', {'data': itemStr});
    };

    render() {

        let {item, navigation} = this.props;
        let img = item.frontImg;
        let newImage = img.replace("w.h", '200.0');
        let payAbstracts = item.payAbstracts;
        let isWaimai = item.isWaimai;
        let count = payAbstracts.length;
        let avgScore = item.avgScore;
        let score = Math.round(avgScore);
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.itemClick.bind(this, item)} style={[{
                borderTopWidth: screen.onePixel,
                borderTopColor: '#bbbbbb',
                borderBottomColor: '#bbbbbb',
                borderBottomWidth: screen.onePixel,
                width: screen.width,
                backgroundColor: 'white',
                flexDirection: 'row',
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: 'center', paddingTop: 10, paddingBottom: 10
            }]}>

                <Image style={{width: 110, height: 100, alignSelf: 'flex-start',}}
                       source={{uri: newImage}}/>
                <View style={{flex: 1, marginLeft: 10, alignSelf: 'flex-start'}}>
                    <View style={{height: 120,}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 25,
                            paddingRight: 14
                        }}>
                            <Text style={{
                                fontSize: 17,
                                lineHeight: 25,
                                color: '#000000',
                                paddingRight: 4,
                            }}
                                  numberOfLines={1}>{item.name}</Text>
                            {
                                isWaimai === 0 ? <View></View> :
                                    <Image source={require('../../img/ic_global_lable_waimai.png')}
                                           style={{width: 16, height: 16,}}/>
                            }

                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 25}}>
                            <StarRating
                                disabled={true}
                                emptyStar={require('../../img/dp_ad_icon_star_small_gary.png')}
                                fullStar={require('../../img/dp_ad_icon_star_small.png')}
                                maxStars={5}
                                rating={score}
                                starSize={14}
                            />
                            <Text
                                style={{
                                    fontSize: 14,
                                    marginLeft: 6
                                }}>¥{item.avgPrice}/人</Text>
                        </View>
                        <Text style={{lineHeight: 25, fontSize: 14}} numberOfLines={1}>{item.cateName}
                            | {item.areaName}</Text>
                        <View style={{
                            height: 45, flexDirection: 'row', alignItems: 'center',
                            borderBottomColor: '#b3b3b3',
                            borderBottomWidth: screen.onePixel,
                        }}>
                            <Image source={require('../../img/icon_mark.png')}
                                   style={{width: 18, height: 18}}/>
                            <Text style={{
                                marginLeft: 3,
                                fontSize: 12,
                                color: '#4d4d4d',
                            }}>{item.historyCouponCount}人消费</Text>
                        </View>
                    </View>
                    {
                        payAbstracts.map((item, i) => (
                            <View key={item + i} style={{
                                height: 25,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image source={{uri: item.icon_url}} style={{width: 15, height: 15}}/>
                                <Text numberOfLines={1}
                                      style={{
                                          fontSize: 14,
                                          marginLeft: 6,
                                          paddingRight: 10
                                      }}>{item.abstract}</Text>
                            </View>
                        ))

                    }

                </View>
            </TouchableOpacity>
        );
    }

}