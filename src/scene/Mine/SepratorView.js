import React, {Component, PureComponent} from 'react';
import {View,} from 'react-native';
import {screen, system} from '../../common/common'

export default class SepratorView extends PureComponent {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#dfdfdf', width: screen.width - 30}}></View>
        );
    }
}