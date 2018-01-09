/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

import color from "../../common/color";
import {screen, system} from '../../common/common'
import FoodWeather from "./FoodWeather";
import NavigationItem from "../../widget/NavigationItem";
import api from "../../common/api";
/*
 * 自定义首页的导航头
 * */
export default class FoodDiscount extends Component {
    constructor(props: Object) {
        super();
        this.state = {
            dataSource: [],
        }
    }

    componentDidMount() {
        this.getDiscount;
    }

    render() {
        return (

            <View style={styles.container}>
                {this.state.dataSource.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} style={styles.container} onPress={this.itemClick}>
                            <View style={styles.left}>
                                <Text style={styles.title}>{item.maintitle}</Text>
                                <Text style={styles.content}>{item.deputytitle}</Text>
                            </View>
                            <Image style={styles.searchIcon} source={{uri: item.imageurl}}/>
                        </TouchableOpacity>
                    )
                })}

            </View>

        )
    }
    itemClick=(item) =>{
        let url = item.url;
        let urlStr=url.replace('imeituan://www.meituan.com/web?url=',"");
        this.props.navigation.navigate('Web', {'url': urlStr,'userName': ''});
    };
    getDiscount = () => {
        return fetch(api.discount)
            .then(res => res.json())
            .then((res) => {
                let list = res.data;
                this.setState({
                    dataSource: list,
                });

            })
            .catch(e => {
            })
            .done();
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.theme,
    },
    title: {
        fontSize: 15,
    },
    content: {
        fontSize: 13,
        color: 'gray',
    },
    searchBar: {
        flex: 1,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginLeft: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});