import React, {PureComponent} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {screen} from "../../common/common";

export default class ItemView extends PureComponent {
    render() {
        var item = this.props.item;
        var squareimgurl = item.squareimgurl;
        squareimgurl = squareimgurl.replace('w.h', '200.0');
        return (
            <TouchableOpacity activeOpacity={0.8}
                              style={{
                                  backgroundColor: 'white',
                                  flexDirection: 'row',
                                  height: 120,
                                  width: screen.width,
                                  alignItems: "center",
                                  paddingLeft: 8, paddingRight: 8
                              }}>

                <Image style={{width: 105, height: 100}} source={{uri: squareimgurl}}/>

                <View style={{justifyContent: 'center', flex: 1, height: 100, marginLeft: 8}}>
                    <Text numberOfLines={1} style={{lineHeight: 25, fontSize: 16}}>{item.title}</Text>
                    <Text style={{
                        fontSize: 14,
                        height: 50,
                        color: '#9c9c9c',
                        lineHeight: 25,
                    }} numberOfLines={2}>
                        【{item.range}】 {item.mtitle}
                    </Text>
                    <View style={{
                        height: 25,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: '#25B7AA', fontSize: 14}}>¥{item.price}.0
                            <Text
                                style={{color: '#cbcbcb',fontSize: 12}}>    门市价：¥{item.value}
                            </Text>
                        </Text>
                        <Text>已售{item.solds}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}