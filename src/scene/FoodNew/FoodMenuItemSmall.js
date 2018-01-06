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
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Paragraph>
                    {this.props.title}
                </Paragraph>
            </TouchableOpacity>
        );
    }
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

