/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

import FoodMenuItem from "./FoodMenuItem";
import FoodMenuItemSmall from "./FoodMenuItemSmall";
import {color} from "../../common";
import {screen} from "../../common/common";

export default class FoodMenu extends Component {
    render() {
        let {menuInfos} = this.props;
        let menuViews = [];
        let menuViewsSmall = [];
        for (let i = 0; i < menuInfos.length; i++) {
            if (i < 5) {
                var info = menuInfos[i];
                var item = (
                    <FoodMenuItem key={info.title}
                                  title={info.title}
                                  icon={info.icon}
                    />
                )
                menuViews.push(item);
            }else{
                var info = menuInfos[i];
                var item = (
                    <FoodMenuItemSmall key={info.title}
                                  title={info.title}
                                  icon={info.icon}
                    />
                )
                menuViewsSmall.push(item);
            }
        }
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    {menuViews}
                </View>
                <View style={styles.menuSmall}>
                    {menuViewsSmall}
                </View>
            </View>
        )
    }


}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        flexDirection: 'row',
        flexWrap:'wrap',
        borderBottomWidth: screen.onePixel,
        borderColor: color.border,
        paddingBottom:3,
    },
    menuSmall: {
        flexDirection: 'row',
        flexWrap:'wrap',
        borderBottomWidth: 10,
        borderColor: color.border
    },
});