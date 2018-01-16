/**
 * Created by liuyan on 2018/1/11.
 */
import React, {Component} from 'react';

import {
    View, Image, Text, StyleSheet, Dimensions, StatusBar, ScrollView, ImageBackground, TouchableOpacity, Alert,
    PixelRatio, Linking, FlatList
} from 'react-native';
import {screen, api} from '../../common/common';
import {nearbyRecommend} from "../../common/api";

import StarRating from 'react-native-star-rating';

import DetailHeaderView from './DetailHeaderView';
import ItemView from "./ItemView";

var item = null;
export default class NearbyDetailScene extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: null,
        }
    };

    constructor(props) {
        super(props);
        const {state} = this.props.navigation;
        const data = state.params.data;
        item = JSON.parse(data);
        this.state = {
            dataSource: [],
            isRefreshing: false,
        }
    }

    componentDidMount() {
        this.getRequestData();
    }

    getRequestData = () => {
        let poiid = item.poiid;
        let url = nearbyRecommend(poiid);

        this.setState({isRefreshing: true}, () => {
            return fetch(url)
                .then(res => res.json())
                .then(res => {
                    var deals = res.data.deals;
                    if (deals !== null && deals.length > 0) {
                        this.setState({isRefreshing: false, dataSource: deals});
                    }
                })
                .catch(e => {

                })
                .done();
        });
    };

    render() {
        const {state} = this.props.navigation;
        const data = state.params.data;
        let item = JSON.parse(data);


        return (
            <View style={{flex: 1}}>
                <View style={{
                    backgroundColor: 'white',
                    height: 45,
                    width: screen.width,
                    paddingLeft: 8,
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        this.props.navigation.goBack();
                    }} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 45,
                    }}>
                        <Image
                            source={require('../../img/Common/icon_back_dark.png')}
                            style={{width: 26, height: 26}}
                        />

                        <Text numberOfLines={1}
                              style={{fontSize: 16, color: '#4c4c4c', marginLeft: 16}}>{item.name}</Text>
                    </TouchableOpacity>

                </View>

                <FlatList data={this.state.dataSource}
                          keyExtractor={(item) => item.title + item.id}
                          renderItem={this.renderCell}
                          ItemSeparatorComponent={this.renderItemSeparator}
                          ListHeaderComponent={this.renderHeader}
                          ListFooterComponent={this.renderFooter}/>

            </View>
        );
    }

    renderFooter = () => (
        <View style={{height: 40}}></View>
    )

    renderItemSeparator = () => {
        return (<View style={{height: 1, backgroundColor: '#dddddd', }}></View>);
    }


    renderHeader = () => {

        return (
            <DetailHeaderView data={item} navigation={this.props.navigation}/>
        );
    }

    renderCell = ({item, index}) => {

        return (
            <ItemView item={item}/>
        );
    }
}