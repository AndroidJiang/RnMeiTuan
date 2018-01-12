/**
 * Created by liuyan on 2018/1/11.
 */
import React, {Component} from 'react';

import {
    View, Image, Text, StyleSheet, Dimensions, StatusBar, ScrollView, ImageBackground, TouchableOpacity,
    PixelRatio, Linking, FlatList
} from 'react-native';
import {screen, api} from '../../common/common';
import {recommendUrlWithId} from "../../common/api";

import StarRating from 'react-native-star-rating';

import DetailHeaderView from './DetailHeaderView';
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
        let brandId = item.brandId;
        let url = recommendUrlWithId(brandId);

        this.setState({isRefreshing: true}, () => {
            
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
                          keyExtractor={(item) => item}
                          renderItem={this.renderCell}
                          ListHeaderComponent={this.renderHeader}/>

            </View>



        );
    }

    renderHeader = () => {

        return (
            <DetailHeaderView data={item}/>
        );
    }

    renderCell = ({item, index}) => {
        return (
            <View></View>
        );
    }
}