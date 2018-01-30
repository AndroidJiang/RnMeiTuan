/**
 * Created by liuyan on 2018/1/29.
 */
import React, {Component, PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar,} from 'react-native';
import GroupItemView from "./GroupItemView";

export default class GroupView extends PureComponent {

    constructor(props) {
        super(props);

    }

    render() {
        let {data} = this.props;
        let views = [];
        data.map((item, index) => {
            if (index === 0) {
                views.push(<GroupItemView showIcon={true} data={item} key={index}/>)
            } else {
                views.push(<GroupItemView showIcon={false} data={item} key={index}/>)
            }
        });
        return (
            <View style={{ backgroundColor: 'white', borderBottomColor: '#f1f1f1', borderBottomWidth: 1}}>
                {
                    views
                }

            </View>
        );
    }
}
