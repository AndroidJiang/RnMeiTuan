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
        super(props);
        this.state = {
            dataSource: [],
        }
    }

    componentDidMount() {
        this.getDiscount();
    }

    render() {
        return (

            <View style={styles.container}>
                {this.state.dataSource.map((item, key) => {
                    return (
                        <TouchableOpacity key={key} style={styles.item} onPress={this.itemClick.bind(this,item)}>

                                <Text style={styles.title}>{item.maintitle}</Text>
                                <Text style={styles.content}>{item.deputytitle}</Text>

                            <Image style={styles.searchIcon} source={{uri: item.imageurl.replace('w.h', '160.0')}}/>
                        </TouchableOpacity>
                    )
                })}

            </View>

        )
    }
    itemClick=(item) =>{
        let url = item.tplurl;
        let urlStr=url.replace('imeituan://www.meituan.com/web?url=',"");
        this.props.navigation.navigate('Web', {'url': urlStr,'userName': item.title});
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
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        borderBottomWidth: 10,
        borderColor: color.border,
    },
    item:{
        justifyContent: 'center',
        alignItems: 'center',

        width: screen.width / 3,
        height: screen.width / 3,
        borderWidth:screen.onePixel,
        borderColor: color.border,
    },
    title: {
        fontSize: 15,
        color:'black',
        fontWeight: 'bold',
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
        width: 50,
        height: 50,
        margin: 5,
    }
});