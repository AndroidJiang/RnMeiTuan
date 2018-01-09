/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";

import Swiper from 'react-native-swiper';
import api from '../../common/api'
/*
 * 首页banner有个bug  解决方案详见https://github.com/leecade/react-native-swiper/issues/389
 * */
export default class FoodBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            swiperShow: false,
        }
    }

    render() {
        if (this.state.swiperShow) {
            return (
                <View style={styles.container}>
                    <Swiper style={styles.wrap}
                            autoplay={true}
                            autoplayTimeout={4}
                            paginationStyle={{
                                bottom: 5,
                            }}
                            dot={<View style={styles.dot}/>}
                            activeDot={<View style={styles.activeDot}/>}>
                        {this.state.dataSource.map((item, key) => {
                            return (
                                <TouchableOpacity key={key} style={styles.container} onPress={this._itemClick.bind(this, item)}>
                                    <Image  style={styles.img} source={{uri: item.imgUrl}}
                                           resizeMode={Image.resizeMode.stretch}/>
                                </TouchableOpacity>
                            )
                        })}
                    </Swiper>
                </View>
            )
        } else {
            return <View/>
        }
    }
    _itemClick(item) {
        let url = item.url;
        let urlStr=url.replace('imeituan://www.meituan.com/web?url=',"");
        this.props.navigation.navigate('Web', {'url': urlStr,'userName': ''});
    };
    getBanner = () => {
        return fetch(api.banner)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    dataSource: res.data,
                    swiperShow: true,
                });
            })
            .catch(e => {
            })
            .done();
    }

    componentDidMount() {
        this.getBanner();
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        height: 100,
    },
    wrap: {},

    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: 'rgba(3,3,3,.5)',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 0
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 0
    }

});