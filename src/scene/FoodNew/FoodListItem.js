/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import {Heading1, Heading2} from '../../widget/Text'
import {screen, system, tool} from '../../common/common'

// create a component
export  default class FoodListItem extends PureComponent {

    render() {
        var info=this.props.info;
        var img=info.frontImg.replace('w.h','300.300');
        img.substring()
        return (
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Image source={{uri:img}}  resizeMode={Image.resizeMode.stretch} style={styles.icon}/>
                <View style={styles.right}>
                    <Heading1>
                        {info.name}
                    </Heading1>
                    <Heading2>
                        {info.name}
                    </Heading2>
                    <Heading2>
                        {info.name}
                    </Heading2>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    right: {

    },
    icon: {
        width: screen.width / 4,
        height: screen.width / 4,
        margin: 5,
    }
});

