/**
 * Created by liuyan on 2017/12/27.
 */
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    Alert,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

var allPage = 1;

export default class ItemListView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isRefreshing: true,
            page: 1,
            isLoadingMore: false,
            isEnd: false,
        }
    }

    componentDidMount() {
        this._getLatestData();
    }

    _getLatestData = () => {
        var id = this.props.id;
        this.setState({isRefreshing: true}, () => {
            return fetch('http://route.showapi.com/582-2?typeId=' + id + '&page=1&showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f')
                .then(res => res.json())
                .then(res => {
                    const contentList = res.showapi_res_body.pagebean.contentlist;
                    allPage = res.showapi_res_body.pagebean.allPages;
                    console.log("len ---->" + contentList.length);
                    if (contentList.length < 20 && contentList.length > 0) {
                        this.setState({
                            isRefreshing: false,
                            isEnd: true,
                            dataSource: contentList,
                            isLoadingMore: false,
                            page: 1
                        })
                    } else {
                        this.setState({
                            isRefreshing: false,
                            dataSource: contentList,
                            isEnd: false,
                            isLoadingMore: false,
                            page: 1
                        });
                    }
                })
                .catch(e => {
                })
                .done();
        })
    }

    render() {

        if (this.state.isRefreshing && !this.state.isLoadingMore) {
            return (
                <View style={{flex: 1, paddingTop: 30}}>
                    <ActivityIndicator color='hotpink' size='large'/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList data={this.state.dataSource}
                              keyExtractor={this._renderKey}
                              ItemSeparatorComponent={this._renderSeparator}
                              renderItem={this._renderItem}
                              refreshing={this.state.isRefreshing}
                              onRefresh={this._getLatestData}
                              onEndReachedThreshold={1}
                              extraData={this.state}
                              onEndReached={this._getMoreData}
                              getItemLayout={(data, index) => ( {length: 101, offset: 101 * index, index} )}
                              ListFooterComponent={this._renderFooter}
                    />
                </View>
            );
        }
    }

    _getMoreData = () => {
        if (this.state.isRefreshing || this.state.isLoadingMore || this.state.isEnd) {
            return;
        }
        let curPage = ++this.state.page;
        var id = this.props.id;
        this.setState({isLoadingMore: true}, () => {
            return fetch('http://route.showapi.com/582-2?typeId=' + id + '&page=' + curPage + '&showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f')
                .then(res => res.json())
                .then(res => {
                    let contentList = res.showapi_res_body.pagebean.contentlist;

                    contentList.splice(0, 1);
                    console.log("len ---->" + contentList.length + "," + curPage);
                    if (curPage === allPage) {
                        this.setState({
                            isEnd: true,
                            isLoadingMore: false,
                            isRefreshing: false,
                            dataSource: [...this.state.dataSource, ...contentList],
                            page: curPage,
                        })
                    } else {
                        this.setState({
                            isEnd: false,
                            isLoadingMore: false,
                            isRefreshing: false,
                            dataSource: [...this.state.dataSource, ...contentList],
                            page: curPage,
                        })
                    }
                }).catch(e => {

                }).done();
        });
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

    getDateTimeStamp(dateStr) {
        return Date.parse(dateStr.replace(/-/gi, "/"));
    }

    getDateDiff(dateStr) {
        var publishTime = this.getDateTimeStamp(dateStr) / 1000,
            d_seconds,
            d_minutes,
            d_hours,
            d_days,
            timeNow = parseInt(new Date().getTime() / 1000),
            d,

            date = new Date(publishTime * 1000),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        //小于10的在前面补0
        if (M < 10) {
            M = '0' + M;
        }
        if (D < 10) {
            D = '0' + D;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        d = timeNow - publishTime;
        d_days = parseInt(d / 86400);
        d_hours = parseInt(d / 3600);
        d_minutes = parseInt(d / 60);
        d_seconds = parseInt(d);

        if (d_days > 0 && d_days < 3) {
            return d_days + '天前';
        } else if (d_days <= 0 && d_hours > 0) {
            return d_hours + '小时前';
        } else if (d_hours <= 0 && d_minutes > 0) {
            return d_minutes + '分钟前';
        } else if (d_seconds < 60) {
            if (d_seconds <= 0) {
                return '刚刚发表';
            } else {
                return d_seconds + '秒前';
            }
        } else if (d_days >= 3 && d_days < 30) {
            return M + '-' + D + '&nbsp;' + H + ':' + m;
        } else if (d_days >= 30) {
            return Y + '-' + M + '-' + D + '&nbsp;' + H + ':' + m;
        }
    }

    _itemClick(item) {
        let url = item.url;
        let userName = item.userName;
        this.props.navigation.navigate('Web', {'url': url, 'userName': userName});
    };

    _renderSeparator = () => {
        return (
            <View style={{height: 1, backgroundColor: '#cccccc', width: Dimensions.get('window').width}}></View>
        );
    };

    _renderItem = ({item, index}) => {
        let time = item.date;
        let cur = this.getDateDiff(time);
        return ( <TouchableOpacity activeOpacity={0.6} onPress={ this._itemClick.bind(this, item)}>
            <View style={{
                width: Dimensions.get('window').width,
                height: 100,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 8,
                paddingRight: 8,
            }}>
                <Image style={{width: 88, height: 66}} source={{uri: item.contentImg}}
                />
                <View style={{flex: 1, marginLeft: 8, justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, color: 'black', lineHeight: 26, maxHeight: 52}}>{item.title}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 12, color: '#00aaf6'}}>{item.userName}</Text>
                        <Text style={{fontSize: 12, color: '#757575'}}>{cur}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>);
    };


    _renderKey = (item) => item.url + item.id;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});