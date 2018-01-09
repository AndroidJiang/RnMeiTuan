/**
 * Created by AJiang on 18/1/4.
 */
import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    ActivityIndicator,
    Dimensions
} from "react-native";

import color from "../../common/color";
import {screen, system} from '../../common/common'
import {FoodHeader} from "./FoodHeader";
import api, {recommendUrl}from "../../common/api";
import FoodBanner from "./FoodBanner";
import FoodListItem from "./FoodListItem";

export class FoodNewScene extends Component {
    /*隐藏默认导航头，自定义*/
    static navigationOptions = ({navigation}) => ({
        header: null,
    })

    constructor(props: Object) {
        super(props);

        this.state = {
            discounts: [],
            dataList: [],
            isRefreshing: true,
            offset: 0,
            isLoadingMore: false,
            isEnd: false,
        }
    }

    componentDidMount() {
        this.requestRecommend();
    }

    render() {
        if (this.state.isRefreshing && !this.state.isLoadingMore) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator color='blue' size='large'/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataList}
                        keyExtractor={this.keyExtractor}
                        ItemSeparatorComponent={this.renderSeparator}
                        onRefresh={this.requestRecommend}
                        refreshing={this.state.isRefreshing}
                        ListHeaderComponent={this.renderHeader}
                        extraData={this.state}
                        renderItem={this.renderCell}
                        onEndReachedThreshold={1}
                        onEndReached={this.getMoreData}
                        ListEmptyComponent={this.renderEmpty}
                        ListFooterComponent={this.renderFooter}
                    />
                </View> )
        }

    }

    keyExtractor = (item) => item;

    renderHeader() {
        return (
            <View>
                <FoodHeader/>
            </View>
        )
    }
    renderSeparator = () => {
        return (
            <View style={{height: 1, backgroundColor: '#cccccc', width: Dimensions.get('window').width}}></View>
        );
    };
    renderCell(info: Object) {
        return (<View>
                <FoodListItem info={info.item}/>
            </View>
        )
    }

    renderEmpty = () => {

        return (<View style={{
            flex: 1, height: 500, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>暂无数据</Text>
        </View>)

    };
    renderFooter = () => {
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

    requestRecommend = () => {
        let url = recommendUrl(1,0);
        this.setState({isRefreshing: true}, () => {
            return fetch(url)
                .then(res => res.json())
                .then((res) => {
                    let list = res.data;

                    if (list.length < 20 && list.length > 0) {
                        this.setState({
                            dataList: list,
                            isRefreshing: false,
                            isLoadingMore: false,
                            isEnd: true,
                            offset: 0,
                        });
                    } else {
                        this.setState({
                            dataList: list,
                            isRefreshing: false,
                            isLoadingMore: false,
                            isEnd: false,
                            offset: 0,
                        });
                    }

                })
                .catch(e => {
                })
                .done();
        })
    }

    getMoreData = () => {
        if (this.state.isRefreshing || this.state.isLoadingMore || this.state.isEnd) {
            return;
        }
        var index = this.state.offset + 20;
        let url = recommendUrl(1,index);
        this.setState({isLoadingMore: true}, () => {
            return fetch(url)
                .then(res => res.json())
                .then((res) => {
                    let list = res.data;
                    console.log(this.state.dataList.length);
                    if (list.length < 20 && list.length > 0) {
                        this.setState({
                            dataList: [...this.state.dataList, ...list],
                            isRefreshing: false,
                            isLoadingMore: false,
                            isEnd: true,
                            offset: index,
                        });

                    } else {
                        this.setState({
                            dataList: [...this.state.dataList, ...list],
                            isRefreshing: false,
                            isLoadingMore: false,
                            isEnd: false,
                            offset: index,
                        });

                    }
                })
                .catch(e => {
                })
                .done();
        })
    }

    keyExtractor(item: Object, index: number) {
        return index;
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