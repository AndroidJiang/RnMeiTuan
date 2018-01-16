import React,{PureComponent} from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import {screen} from "../../common/common";

export default class ItemView extends PureComponent{
    render(){
        var squareimgurl = this.props.item.squareimgurl;
        squareimgurl = squareimgurl.replace('w.h', '200.0');
        return(
            <TouchableOpacity activeOpacity={0.8}
                              style={{
                                  backgroundColor: 'white',
                                  flexDirection: 'row',
                                  height: 120,
                                  width: screen.width,
                                  alignItems: "center",
                                  paddingLeft: 8
                              }}>

                <Image style={{width: 110, height: 100}} source={{uri: squareimgurl}}/>

                <View></View>
            </TouchableOpacity>
        );
    }
}