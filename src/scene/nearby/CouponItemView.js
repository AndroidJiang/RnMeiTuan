/**
 * Created by liuyan on 2018/1/29.
 */
import React, {Component, PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import {screen, api} from '../../common/common';
import color from "../../common/color";
export default class CouponItemView extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let {showIcon, data} = this.props;
        return (
            <TouchableOpacity style={{height: 110, width: screen.width, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flexDirection: 'column', justifyContent: 'center', flex: 1}}>
                    <View style={[{
                        flexDirection: 'row',
                        height: 30,
                        alignItems: 'center'
                    }, showIcon ? {paddingLeft: 12} : {paddingLeft: 28}]}>
                        {showIcon ?
                            <Image style={{width: 16, height: 16}} source={require('../../img/baby_tuan.png')}/> :
                            <View></View>}
                        <Text style={{marginLeft: 8, fontSize: 16, color: '#343434'}}>{data.title}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 36,
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

                    <View style={{flexDirection: 'row', height: 30, alignItems: 'center', paddingLeft: 36}}>
                        <Text style={{color: color.theme}}>¥{data.price}</Text>
                        <Text style={{color: '#cbcbcb', marginLeft: 8}}>门市价：¥{data.value}</Text>
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