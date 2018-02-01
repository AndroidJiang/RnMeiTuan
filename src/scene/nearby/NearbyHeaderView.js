/**
 * Created by liuyan on 2018/1/9.
 */
import React, {Component, PureComponent} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity} from 'react-native';

import {screen} from '../../common/common';
export default class NearbyHeaderView extends PureComponent {

    constructor(props) {
        super(props);
        console.log(this.props.type);
    }

    render() {
        let {selectedIndex, type, onSelected} = this.props;
        return (
            <View style={{
                flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',
                backgroundColor:'#EFEFF1',
            }}>
                {
                    type.map((item, index) => (
                        <TouchableOpacity activeOpacity={0.9}
                                          key={item}
                                          style={[{
                                              backgroundColor: selectedIndex === index ? '#FB3C5A' : 'white',
                                              borderColor: selectedIndex === index ? '#E2E2E2' : '#E2E2E2'
                                          }, {
                                              width: screen.width / 4 - 10,
                                              height: 30,
                                              borderRadius: 18,
                                              marginTop: 18,
                                              marginLeft: 8,
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              borderWidth: 0.5,
                                          }]} onPress={() => onSelected && onSelected(index)}>
                            <Text
                                style={[{color: selectedIndex === index ? 'white' : '#898989'}, {fontSize: 14}]}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }

}