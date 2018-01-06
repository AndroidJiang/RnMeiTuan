/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, FlatList} from "react-native";

import color from "../../common/color";
import {screen, system} from '../../common/common'
import {FoodHeader} from "./FoodHeader";
import api from "../../common/api";
import FoodBanner from "./FoodBanner";

export class FoodNewScene extends Component {
    /*隐藏默认导航头，自定义*/
    static navigationOptions = ({navigation}) => ({
        header: null,
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            discounts: [],
            dataList: ['1', '1', '1', '1', '1', '1', '1'],
            refreshing: true,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    // onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}
                />
            </View>
        )
    }

    renderHeader() {
        return (
            <View>
                <FoodHeader/>
            </View>
        )
    }

    renderCell(info: Object) {
        return (<View>
                <FoodBanner/>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
        flex: 1, backgroundColor: 'white',
    },

    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },

});