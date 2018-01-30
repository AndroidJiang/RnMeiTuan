/**
 * Created by liuyan on 2018/1/12.
 */
import React, {Component, PureComponent} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Alert,
    ImageBackground,
    TouchableOpacity,
    Linking
} from 'react-native';
import StarRating from "react-native-star-rating/star-rating";
import {screen, api} from '../../common/common';
import CouponView from "./CouponView";
import GroupView from "./GroupView";
export default class DetailHeaderView extends PureComponent {


    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.data;
        let imgUrl = item.frontImg.replace('w.h', '480.0');
        let phone = item.phone;
        let index = phone.indexOf('/');
        if (index !== -1) {
            phone = phone.substring(0, index);
        }
        let count = Math.ceil(Math.random() * 20);
        let avgScore = item.avgScore;
        let score = Math.round(avgScore);
        let menus = item.featureMenus.replace(/,/g, ' ');
        let data = this.props.detail;
        let coupon = [];
        let group = [];
        data.map((item, index) => {
            let mealcount = item.mealcount;
            console.log(mealcount);
            if ('[]' === mealcount) {
                coupon.push(item);
            } else {
                group.push(item);
            }
        });
        return (
            <View>
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
                        <Image source={require('../../img/icon_image.png')} style={{width: 20, height: 20}}/>
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
                    <Text style={{lineHeight: 40, fontSize: 20, color: '#4c4c4c'}} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                        <StarRating
                            disabled={true}
                            emptyStar={require('../../img/dp_ad_icon_star_small_gary.png')}
                            fullStar={require('../../img/dp_ad_icon_star_small.png')}
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
                    <Image style={{width: 16, height: 16,}} source={require('../../img/icon_location.png')}/>

                    <Text numberOfLines={2}
                          style={{
                              fontSize: 16,
                              marginLeft: 8,
                              width: screen.width * 0.75,
                              color: '#4c4c4c'
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
                               source={require('../../img/icon_call.png')}/>
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
                            marginBottom: 10
                        }}
                    >
                        <Image style={{width: 20, height: 20}}
                               source={require('../../img/icon_waimai.png')}/>
                        <Text style={{fontSize: 14, marginLeft: 8}}>外卖</Text>
                        <Image style={{width: 9, height: 16, position: 'absolute', right: 15}}
                               source={require('../../img/buy_icon_arrow_right.png')}/>
                    </View> : item.isQueuing === 1 ? <View style={{
                        height: 40,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 8,
                        marginBottom: 10
                    }}>

                        <Image style={{width: 20, height: 20}}
                               source={require('../../img/icon_paidui.png')}/>
                        <Text style={{fontSize: 14, marginLeft: 8}}>排队</Text>
                        <Image style={{width: 9, height: 16, position: 'absolute', right: 15}}
                               source={require('../../img/buy_icon_arrow_right.png')}/>
                    </View> : <View style={{marginBottom: 10}}></View>

                }

                {
                    coupon.length !== 0 ?
                        <CouponView data={coupon}/> : <View></View>
                }

                {
                    group.length !== 0 ? <GroupView data={group}/> : <View></View>
                }

                <View style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    paddingLeft: 8,
                    borderBottomWidth: 1,
                    borderBottomColor: '#f4f4f4',
                    borderTopWidth: 1,
                    borderTopColor: '#f4f4f4',
                    backgroundColor: 'white',
                }, coupon.length !== 0 || group.length !== 0 ? {marginTop: 10} : {marginTop: 0}]}>
                    <Image style={{width: 24, height: 24}} source={require('../../img/icon_remark.png')}/>
                    <Text style={{color: '#4c4c4c', fontSize: 16, marginLeft: 8}}>大众点评网友评分：
                        <Text style={{color: '#f1a13b', fontSize: 14}}>{avgScore}</Text>
                    </Text>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 14, color: '#dddddd', marginRight: 6}}>共4326条评价</Text>
                        <Image source={require('../../img/buy_icon_arrow_right.png')}
                               style={{width: 9, height: 16, marginRight: 15}}/>
                    </View>
                </View>

                <View style={{
                    marginTop: 10, borderBottomWidth: 1,
                    borderBottomColor: '#f4f4f4',
                    borderTopWidth: 1,
                    borderTopColor: '#f4f4f4',
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        height: 40, paddingLeft: 8, justifyContent: 'center', borderBottomWidth: 1,
                        borderBottomColor: '#f4f4f4',
                    }}>
                        <Text>推荐菜</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={
                        () => this.recomendItemClick()} style={{
                        paddingLeft: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 6
                    }}>
                        <Text numberOfLines={3} style={{fontSize: 14, lineHeight: 26, flex: 1}}>{menus}</Text>
                        <Image source={require('../../img/buy_icon_arrow_right.png')}
                               style={{width: 9, height: 16, marginRight: 15, marginLeft: 10}}/>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 10, borderBottomWidth: 1,
                    borderBottomColor: '#f4f4f4',
                    borderTopWidth: 1,
                    borderTopColor: '#f4f4f4',
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        height: 40, paddingLeft: 8, justifyContent: 'center', borderBottomWidth: 1,
                        borderBottomColor: '#f4f4f4',
                    }}>
                        <Text>更多服务</Text>
                    </View>
                    <View style={{paddingLeft: 8, flexDirection: 'row', alignItems: 'center', height: 40}}>
                        <Text style={{width: 80, lineHeight: 26, fontSize: 14}}
                              numberOfLines={1}>{item.openInfo}</Text>
                        {
                            item.wifi ? <Text style={{width: 80, lineHeight: 26, fontSize: 14, marginLeft: 16}}
                                              numberOfLines={1}>无线WIFI</Text> : <View></View>
                        }
                    </View>
                </View>
                <View style={{
                    height: 40, paddingLeft: 8, justifyContent: 'center', borderBottomWidth: 1,
                    borderBottomColor: '#f4f4f4', backgroundColor: 'white', marginTop: 10,
                }}>
                    <Text>附近推荐</Text>
                </View>

            </View>
        );
    }

    recomendItemClick = () => {
        // this.props.navigation.navigate('Recomend');
        this.props.navigation.navigate('Recomend', {
            'title': '推荐菜', callback: (data) => {
                Alert.alert(data);
            }
        })
    };
}