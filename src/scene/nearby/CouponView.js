/**
 * Created by liuyan on 2018/1/29.
 */
import React, {Component, PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar,} from 'react-native';
import CouponItemView from "./CouponItemView";

export default class CouponView extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;
        let views = [];
        data.map((item, index) => {
            if (index === 0) {
                views.push(<CouponItemView key={index} showIcon={true} data={item}/>);
            } else {
                views.push(<CouponItemView key={index} showIcon={false} data={item}/>);
            }
        });
        return (
            <View style={{backgroundColor: 'white', borderBottomColor: '#f1f1f1', borderBottomWidth: 1}}>
                {
                    views
                }

            </View>
        );
    }
}
