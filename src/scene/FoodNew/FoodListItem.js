/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Heading1, Heading2, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common/common'
import color from "../../common/color";


let count = 0;
// create a component
export default class FoodListItem extends PureComponent {

    render() {
        var info = this.props.info;
        let imageUrl = info.frontImg.replace('w.h', '160.0')
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <Image source={{uri: imageUrl}} style={styles.icon}/>
                <View style={styles.rightContainer}>
                    <Heading1>{info.name}</Heading1>
                    <View>
                    </View>
                    <Paragraph numberOfLines={1} style={{marginTop: 8}}>{info.featureMenus}</Paragraph>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Heading1 style={styles.price}>￥{info.avgPrice}</Heading1>
                        <Text style={{
                            marginLeft:5,
                            paddingLeft: info.discount==""?0:5,
                            paddingRight: info.discount==""?0:5,
                            borderColor: 'green',
                            borderWidth: info.discount==""?0:1,
                            borderRadius: 5,
                            fontSize:12,
                            color: 'green',}}>{info.discount}</Text>
                        <Text style={styles.count}>已售{info.historyCouponCount}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    },
    discount: {

    },
    count: {
        position: 'absolute',
        right: 5,
        fontSize:12,
        color:'gray',
    }
});

