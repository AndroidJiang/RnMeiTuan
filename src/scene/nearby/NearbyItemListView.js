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
    ProgressBarAndroid,
    ActivityIndicator
} from 'react-native';
import {screen, api} from '../../common/common';
import NearbyHeaderView from "./NearbyHeaderView";
import {recommendUrl} from "../../common/api";
import {Heading1, Heading2, Paragraph} from '../../widget/Text'
export default class NearbyItemListView extends Component {

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
        this.getRequestData();
    }

    getRequestData = () => {
        let url = recommendUrl(1, 0);
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
        this.setState({isLoadingMore: true}, () => {
            let newOff = this.state.offset + 20;
            let url = recommendUrl(1, newOff);
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
        if (this.state.isFirstLoading && !this.state.isLoadingMore) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ProgressBarAndroid color={'#7c9ff6'}/>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <FlatList data={this.state.dataSource}
                              keyExtractor={this.renderKey}
                              renderItem={this.renderCell}
                              extraData={this.state}
                              onEndReachedThreshold={0.1}
                              onEndReached={this.getMoreData}
                              ListHeaderComponent={this.renderHeader}
                              ListFooterComponent={this.renderFooter}
                              ItemSeparatorComponent={this.renderSeparator}/>
                </View>
            );
        }
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
        let img = item.frontImg;
        let newImage = img.replace("w.h", '200.0');
        let payAbstracts = item.payAbstracts;
        let count = payAbstracts.length;
        return (
            <View style={[{
                borderTopWidth: screen.onePixel,
                borderTopColor: '#888888',
                borderBottomColor: '#888888',
                borderBottomWidth: screen.onePixel,
                width: screen.width,
                backgroundColor: 'white',
                flexDirection: 'row',
                paddingLeft: 10,
                paddingRight: 10,
                alignItems: 'center', paddingTop: 10, paddingBottom: 10
            }]}>

                <Image style={{width: 140, height: 120, alignSelf: 'flex-start',}}
                       source={{uri: newImage}}/>
                <View style={{flex: 1, marginLeft: 10, alignSelf: 'flex-start'}}>
                    <View style={{height: 120,}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
                            <Text style={{fontSize: 18, lineHeight: 30,}} numberOfLines={1}>{item.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
                            <Image source={require('../../img/Common/icon_store.png')}
                                   style={{width: 96, height: 15, marginTop: 10}}/>
                            <Text
                                style={{
                                    lineHeight: 30,
                                    fontSize: 14,
                                    textAlign: 'center',
                                    marginLeft: 6
                                }}>¥{item.avgPrice}/人</Text>
                        </View>
                        <Text style={{lineHeight: 30, fontSize: 14}}>{item.cateName} | {item.areaName}</Text>
                        <View style={{
                            height: 30, flexDirection: 'row', alignItems: 'center'
                        }}>
                            <Image source={require('../../img/Common/icon_mark.png')} style={{width: 14, height: 14}}/>
                            <Text style={{
                                marginLeft: 3,
                                fontSize: 12,
                            }}>{item.markNumbers}人消费</Text>
                        </View>
                    </View>

                    {
                        count === 0 ? <View></View> : count === 1 ?
                            <View style={{
                                height: 30, borderTopColor: '#999999',
                                borderTopWidth: screen.onePixel,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Image source={{uri: payAbstracts[0].icon_url}} style={{width: 12, height: 12}}/>
                                <Text numberOfLines={1}
                                      style={{fontSize: 14, marginLeft: 6,}}>{payAbstracts[0].abstract}</Text>
                            </View> : <View
                                style={{
                                    height: 60, borderTopColor: '#999999',
                                    borderTopWidth: screen.onePixel,
                                    justifyContent: 'center',
                                }}>
                                <View style={{
                                    height: 30,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image source={{uri: payAbstracts[0].icon_url}} style={{width: 12, height: 12}}/>
                                    <Text numberOfLines={1}
                                          style={{fontSize: 14, marginLeft: 6}}>{payAbstracts[0].abstract}</Text>
                                </View>
                                <View style={{
                                    height: 30,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image source={{uri: payAbstracts[1].icon_url}} style={{width: 12, height: 12}}/>
                                    <Text numberOfLines={1}
                                          style={{fontSize: 14, marginLeft: 6,}}>{payAbstracts[1].abstract}</Text>
                                </View>
                            </View>
                    }

                </View>
            </View>
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
                <NearbyHeaderView type={types} selectedIndex={this.state.selectedIndex} onSelected={(index) => {
                    if (index != this.state.selectedIndex) {
                        this.setState({selectedIndex: index});
                    }
                }}/>
            );
        }

    };

    renderSeparator = () => {
        return (
            <View style={{

                height: 15,
            }}></View>
        );
    };

    renderKey = (item,index) => index;

}
