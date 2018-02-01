/**
 * Created by liuyan on 2018/1/9.
 */
import React, {Component, PureComponent} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Alert
} from 'react-native';
import color from "../../common/color";
import {screen, api} from '../../common/common';
import NearbyHeaderView from "./NearbyHeaderView";
import {recommendUrl} from "../../common/api";
import StarRating from 'react-native-star-rating';
import NearbyItemCellView from "./NearbyItemCellView";
var cate = 1;
var firstCate;
export default class NearbyItemListView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isFirstLoading: true,
            isLoadingMore: false,
            selectedIndex: 0,
            offset: 0,
            isEnd: false,
        }
    }

    componentDidMount() {
        let title = this.props.title;
        if ('全部' === title) {
            cate = -1;
        } else if ('住酒店' === title) {
            cate = 20;
        } else if ('爱玩乐' === title) {
            cate = 2;
        } else if ('美食' === title) {
            cate = 1;
        } else {
            cate = 1;
        }
        firstCate = cate;
        this.getRequestData();
    }

    getRequestData = () => {
        let url = recommendUrl(cate, 0);
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                const datas = res.data;
                this.setState({dataSource: datas, isFirstLoading: false});
            })
            .catch(e => {
            })
            .done();
    };

    getMoreData = () => {
        if (this.state.isFirstLoading || this.state.isEnd || this.state.isLoadingMore) {
            return;
        }
        this.setState({isLoadingMore: true, isEnd: false}, () => {
            let newOff = this.state.offset + 20;
            let url = recommendUrl(cate, newOff);
            return fetch(url)
                .then(res => res.json())
                .then(res => {
                    const datas = res.data;
                    if (datas.length > 0) {
                        if (datas.length < 20) {
                            this.setState({
                                isLoadingMore: false,
                                isEnd: true,
                                offset: newOff,
                                dataSource: [...this.state.dataSource, ...datas],
                                isFirstLoading: false,
                            });
                        } else {
                            this.setState({
                                isLoadingMore: false,
                                isEnd: false,
                                offset: newOff,
                                dataSource: [...this.state.dataSource, ...datas],
                                isFirstLoading: false,
                            });
                        }
                    }

                })
                .catch(e => {
                })
                .done();
        });
    };

    render() {

            return (
                <View style={{flex: 1,backgroundColor:'#F1F1F1'}}>
                    <FlatList data={this.state.dataSource}
                              keyExtractor={this.renderKey}
                              renderItem={this.renderCell}
                              extraData={this.state}
                        // onEndReachedThreshold={0.5}
                        // onEndReached={this.getMoreData}
                              ListHeaderComponent={this.renderHeader}
                              ListFooterComponent={this.renderFooter}
                              // ListEmptyComponent={this.renderEmpty}
                              ItemSeparatorComponent={this.renderSeparator}/>
                </View>
            );

    }

    renderFooter = () => {
        if (this.state.isEnd) {
            return (<View style={{height: 40, alignItems: 'center', justifyContent: 'center'}}>
                我是有底线的~
            </View>);
        } else if (this.state.isLoadingMore) {
            return (<View
                style={{height: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <ActivityIndicator size='small' color={'#899ef6'}/>
                <Text>加载中...</Text>
            </View>);
        } else {
            return <View></View>
        }
    };


    renderCell = ({item, index}) => {
        return (
            <NearbyItemCellView item={item} navigation={this.props.navigation}/>

        );
    };

    renderHeader = () => {
        const types = this.props.type;
        if (types.length === 0) {
            return (
                <View></View>
            );
        } else {
            return (
                //setState 是异步操作
                <NearbyHeaderView type={types} selectedIndex={this.state.selectedIndex} onSelected={(index) => {
                    console.log('index===' + index);
                    if (index != this.state.selectedIndex) {
                        this.setState({selectedIndex: index, dataSource: [], isFirstLoading: true}, () => {
                            this.getRequestDataWithType();
                        });
                    }
                }}/>
            );
        }

    };
    renderEmpty = () => {

        return (<View style={{
            flex: 1, height: 500, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>暂无数据</Text>
        </View>)

    };
    getRequestDataWithType = () => {
        let index = this.state.selectedIndex;
        const types = this.props.type;
        let currType = types[index];
        console.log(currType);
        switch (currType) {
            case '全部':
                let title = this.props.title;
                if ('住酒店' === title) {
                    cate = 20;
                } else if ('爱玩乐' === title) {
                    cate = 2;
                } else if ('美食' === title) {
                    cate = 1;
                } else {
                    cate = 1;
                }
                break;
            case '面包甜点':
                cate = 11;
                break;
            case '小吃快餐':
                cate = 36;
                break;
            case '川湘菜':
                cate = 55;
                break;
            case '日韩料理':
                cate = 28;
                break;
            case '台湾菜':
                cate = 227;
                break;
            case '青年旅社':
                cate = 385;
                break;
            case '经济酒店':
                cate = 79;
                break;
            case '豪华酒店':
                cate = 80;
                break;
            case '主题酒店':
                cate = 381;
                break;
            case '公寓型酒店':
                cate = 383;
                break;
            case 'KTV':
                cate = 10;
                break;
            case '足疗按摩':
                cate = 52;
                break;
            case '洗浴/汗蒸':
                cate = 112;
                break;
            case '其他娱乐':
                cate = 26;
                break;
            case '运动健身':
                cate = 39;
                break;
            case '桌游/电玩':
                cate = 38;
                break;
            default:
                cate = 1;
                break;
        }
        let url = recommendUrl(cate, 0);
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                debugger
                const datas = res.data;
                this.setState({dataSource: datas, isFirstLoading: false});
            })
            .catch(e => {
            })
            .done();
    }

    renderSeparator = () => {
        return (
            <View style={{
                height: 12,
            }}></View>
        );
    };

    renderKey = (item, index) => index + item.cateName;

}
