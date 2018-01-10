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
                flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', borderBottomColor: '#888888',
                borderBottomWidth: screen.onePixel,
            }}>
                {
                    type.map((item, index) => (
                        <TouchableOpacity activeOpacity={0.9}
                                          key={item}
                                          style={[{
                                              backgroundColor: selectedIndex === index ? '#ea7762' : 'white',
                                              borderColor: selectedIndex === index ? '#d26757' : '#bebebe'
                                          }, {
                                              width: screen.width / 4 - 10,
                                              height: 36,
                                              borderRadius: 15,
                                              marginTop: 10,
                                              marginBottom: 10,
                                              marginLeft: 8,
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              borderWidth: 1,
                                          }]} onPress={() => onSelected && onSelected(index)}>
                            <Text
                                style={[{color: selectedIndex === index ? 'white' : '#888888'}, {fontSize: 16}]}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }

}