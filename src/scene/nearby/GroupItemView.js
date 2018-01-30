/**
 * Created by liuyan on 2018/1/29.
 */
import React, {Component, PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import {screen, api} from '../../common/common';
import color from "../../common/color";
export default class GroupItemView extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {showIcon, data} = this.props;
        let squareimgurl = data.squareimgurl;
        squareimgurl = squareimgurl.replace('w.h', '200.0');
        return (
            <TouchableOpacity style={{height: 110, flexDirection: 'row', paddingTop: 10, width: screen.width}}>
                <View style={[{flexDirection: 'row', flex: 1}, showIcon ? {paddingLeft: 12} : {paddingLeft: 36}]}>
                    {
                        showIcon ? <Image style={{width: 16, height: 16}}
                                          source={require('../../img/food_poi_icon_groupbuy_v2.png')}/> : <View></View>
                    }

                    <Image source={{uri: squareimgurl}}
                           style={[{width: 80, height: 70,}, showIcon ? {marginLeft: 8} : {marginLeft: 0}]}/>

                    <View style={{flex: 1, marginLeft: 8,}}>
                        <Text style={{
                            fontSize: 16,
                            color: '#343434',
                            height: 30,
                            textAlignVertical: 'center'
                        }} numberOfLines={1}>{data.title}</Text>

                        <View style={{
                            flexDirection: 'row',
                            height: 40,
                            alignItems: 'center',
                        }}>
                            {
                                data.taglist.map((item, index) => (
                                    <Text key={index}
                                          style={[{
                                              marginRight: 6, fontSize: 12
                                          },]} numberOfLines={1}>{item.name}</Text>
                                ))
                            }
                        </View>

                        <View style={{flexDirection: 'row', height: 30, alignItems: 'center',}}>
                            <Text style={{color: color.theme}}>¥{data.price}</Text>
                            <Text style={{color: '#cbcbcb', marginLeft: 8}}>门市价：¥{data.value}</Text>
                        </View>
                    </View>

                </View>
                <View style={{height: 110, width: 100, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#cbcbcb'}}>{data.soldsDesc}</Text>
                    <Text style={{
                        marginTop: 5,
                        color: '#f19d24',
                        width: 50,
                        height: 30,
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 3,
                        borderColor: '#f19d24',
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>购买</Text>
                </View>
            </TouchableOpacity>
        );
    }
}