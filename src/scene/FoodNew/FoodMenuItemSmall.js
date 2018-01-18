/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan 
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import {Heading2, Paragraph} from '../../widget/Text'
import { screen, system, tool } from '../../common/common'

// create a component
export  default  class FoodMenuItemSmall extends PureComponent {
    render() {
        var info=this.props.info;
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.itemClick.bind(this,info)}>
                <Image source={info.icon} resizeMode='contain' style={styles.icon} />
                <Paragraph>
                    {info.title}
                </Paragraph>
            </TouchableOpacity>
        );
    }
    itemClick=(info) =>{
        let url = info.url;
        this.props.navigation.navigate('Web', {'url': url,'userName': info.title});
    };
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 5,
        height: screen.width / 5,
    },
    icon: {
        width: screen.width / 13,
        height: screen.width / 13,
        margin: 5,
    }
});

