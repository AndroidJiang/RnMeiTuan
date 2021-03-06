/**
 * Created by liuyan on 2017/12/28.
 */
import React, {Component} from 'react';

import {View, Text, Image, WebView, TouchableOpacity} from 'react-native';
import color from "../../common/color";

export default class WebPage extends Component {
    static navigationOptions = ({navigation}) => {
        let name = navigation.state.params.userName;
        return {
            headerTitle: `${name}`,
            headerStyle: {backgroundColor: color.theme, height: 48,},
            headerTitleStyle: {color: 'white', fontSize: 20,alignSelf:'center'},
            headerLeft: <TouchableOpacity activeOpacity={0.6} onPress={() => {
                navigation.goBack()
            }}>
                <Image style={{width: 22, height: 22, marginLeft: 6}}
                       source={require('../../img/icon_back_one.png')}/>
            </TouchableOpacity>,
            headerRight: <TouchableOpacity activeOpacity={0.6} onPress={() => {
            }}>
                <Image style={{width: 22, height: 22, marginRight: 6}}
                       source={require('../../img/icon_share.png')}/>
            </TouchableOpacity>
        };
    };


    render() {
        const {state} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <WebView javaScriptEnabled={true} source={{uri: state.params.url}}
                         automaticallyAdjustContentInsets={true}
                         domStorageEnabled={true} mixedContentMode={'always'} startInLoadingState={true}/>

            </View>
        );
    }
}