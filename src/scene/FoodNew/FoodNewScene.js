/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, ScrollView, FlatList, ActivityIndicator,Dimensions} from "react-native";

import color from "../../common/color";
import {screen, system} from '../../common/common'
import {FoodHeader} from "./FoodHeader";
import api ,{recommendUrl}from "../../common/api";
import FoodBanner from "./FoodBanner";
import FoodListItem from "./FoodListItem";

export class FoodNewScene extends Component {
    /*隐藏默认导航头，自定义*/
    static navigationOptions = ({navigation}) => ({
        header: null,
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            discounts: [],
            dataList: ['1', '2', '3', '4', '5', '6', '7'],
            refreshing: true,
            offset: 0,
            isLoadingMore: false,
            isEnd: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.requestRecommend()}
                    refreshing={this.state.refreshing}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}
                    onEndReachedThreshold={1}
                    // onEndReached={this.getMoreData()}
                    ListEmptyComponent={this._renderEmpty}
                    ListFooterComponent={this._renderFooter}
                />
            </View>
        )
    }

    keyExtractor = (item) => item;

    renderHeader() {
        return (
            <View>
                <FoodHeader/>
            </View>
        )
    }

    renderCell(info: Object) {
        return (<View>
                <FoodListItem info={info.item}/>
            </View>
        )
    }
    _renderEmpty = () => {

        return (<View style={{
            flex: 1, height: 500, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>暂无数据</Text>
        </View>)

    };
    _renderFooter = () => {
        if (this.state.isLoadingMore) {
            return (
                <View style={{
                    height: 40,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator color='hotpink' size='small'/>
                    <Text style={{fontSize: 14, marginLeft: 15}}>正在加载中...</Text>
                </View>
            );
        }
        return (<View />);
    };
    requestRecommend() {
        debugger;
        let url=recommendUrl(0);
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                let list = res.data;
                if (list.length < 20 && list.length > 0) {
                    this.setState({
                        dataList: list,
                        refreshing: false,
                        isLoadingMore: false,
                        isEnd: true,
                        offset:0,
                    });
                } else {
                    this.setState({
                        dataList: list,
                        refreshing: false,
                        isLoadingMore: false,
                        isEnd: false,
                        offset:0,
                    });
                }

            })
            .catch(e => {
            })
            .done();
    }

    getMoreData() {
        if (this.state.isRefreshing || this.state.isLoadingMore || this.state.isEnd) {
            return;
        }
        let index = ++this.state.offset;
        let url=recommendUrl(index);
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                let list = res.data;
                if (list.length < 20 && list.length > 0) {
                    this.setState({
                        dataList: list,
                        refreshing: false,
                        isLoadingMore: false,
                        isEnd: true,
                        offset:index,
                    });
                } else {
                    this.setState({
                        dataList: list,
                        refreshing: false,
                        isLoadingMore: false,
                        isEnd: false,
                        offset:index,
                    });
                }
            })
            .catch(e => {
            })
            .done();
    }

    componentDidMount() {
        this.requestRecommend();
    }

    keyExtractor(item: Object, index: number) {
        return item.id
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