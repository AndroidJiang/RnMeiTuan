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

                <Image style={{width: 110, height: 100}} source={{uri: squareimgurl}}/>

                <View style={{justifyContent: 'center', flex: 1, height: 100, marginLeft: 8}}>
                    <Text numberOfLines={1} style={{lineHeight: 30, fontSize: 14}}>[{item.mname}]{item.title}</Text>
                    <View style={{
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text>{item.rating}分</Text>
                        <Text>{item.range}</Text>
                    </View>
                    <View style={{
                        height: 30,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style = {{color:'#25B7AA'}}>¥{item.price}.0</Text>
                        <Text>已售{item.solds}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}