/**
 * Created by liuyan on 2017/12/25.
 */
import React, {Component} from 'react';

import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    TouchableWithoutFeedback,
    FlatList,
    StyleSheet,
    ToastAndroid,
    ScrollView,
    RefreshControl,
    Alert,
    DeviceEventEmitter
} from 'react-native';

const w = Dimensions.get('window').width;
var TypeIds = [];
var typeNames = [];
export default class Type extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            tabBarLabel: '分类',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={[{width: 20, height: 20}, {tintColor: tintColor}]}
                       source={require('../../app/img/icon_type.png')}
                />
            ),
            header: null,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            chooseTypeIds: TypeIds,
            chooseTypeNames: typeNames,
            isRefreshing: false,
        }
    }

    componentDidMount() {
        this._getRequestData();
    }


    _getRequestData = () => {
        this.setState({isRefreshing: true}, () => {
            return fetch('http://route.showapi.com/582-1?showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f')
                .then(res => res.json())
                .then(res => {
                    let typeList = res.showapi_res_body.typeList;
                    console.log(JSON.stringify(typeList));
                    this.setState({dataSource: typeList, isRefreshing: false});
                })
                .catch(e => console.log(e.message))
                .done();
        });
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <StatusBar backgroundColor='#00aaf6'/>
                <View style={{
                    width: w,
                    height: 45,
                    backgroundColor: '#00aaf6',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>分类</Text>
                    <TouchableWithoutFeedback onPress={this.onSubmit}><Image
                        source={require('../../app/img/icon_sure.png')}
                        style={{
                            width: 18,
                            height: 18,
                        }}/></TouchableWithoutFeedback>
                </View>
                <View style={{
                    width: w,
                    height: 40,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 16, color: 'black'}} ref={txt => this.txt = txt}>请选择您感兴趣的1-5个类别</Text>
                </View>
                <ScrollView style={{flex: 1}}
                            horizontal={false}
                            refreshControl={
                                <RefreshControl refreshing={this.state.isRefreshing}
                                                onRefresh={this.onRefreshData}
                                                colors={['#ff0000', '#00ff00', '#0000ff']}/>
                            }>
                    <View style={{width: 320, paddingRight: 20}}>
                        <FlatList data={this.state.dataSource}
                                  keyExtractor={this._keyExtractor}
                                  numColumns={3}
                                  extraData={this.state}
                                  ItemSeparatorComponent={this._renderSeparator}
                                  ListHeaderComponent={this._renderHeader}
                                  renderItem={this._renderItem}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }

    onSubmit = () => {
        if (TypeIds.length === 0) {
            ToastAndroid.show('请至少选择一个类哦！', 1000);
        } else {
            DeviceEventEmitter.emit('changeType', JSON.stringify(TypeIds), JSON.stringify(typeNames));
            this.props.navigation.goBack();
        }
    };

    onPress = (item) => {
        var id = parseInt(item.id);
        var name = item.name;
        var index = TypeIds.indexOf(id);
        const len = TypeIds.length;
        if (-1 === index) {
            if (len === 5) {
                ToastAndroid.show('不要超过5个类哦！', 1000);
            } else {
                TypeIds.push(id);
                typeNames.push(name);
            }
        } else {
            TypeIds.splice(index, 1);
            typeNames.splice(index, 1);
        }
        this.setState({chooseTypeIds: TypeIds, chooseTypeNames: typeNames});
    };

    onRefreshData = () => {
        this.setState({isRefreshing: true}, () => {
            return fetch('http://route.showapi.com/582-1?showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f')
                .then(res => res.json())
                .then(res => {
                    let typeList = res.showapi_res_body.typeList;
                    console.log(JSON.stringify(typeList));
                    this.setState({dataSource: typeList, isRefreshing: false});
                })
                .catch(e => console.log(e.message))
                .done();
        });
    };

    _renderSeparator = () => {
        return <View style={{height: 20}}></View>
    }

    _renderHeader = () => {
        return <View style={{height: 10}}></View>
    };

    _keyExtractor = (item) => item.id;

    _renderItem = ({item, index}) => {
        const isSelect =
            Array.from(this.state.chooseTypeIds).indexOf(parseInt(item.id)) !== -1;
        return (
            <TouchableWithoutFeedback onPress={() => this.onPress(item)}>
                <View
                    style={[styles.container, isSelect ? {backgroundColor: '#00aaf6'} : {backgroundColor: 'white'}]}>
                    <Text
                        style={[styles.txtsty, isSelect ? {color: 'white'} : {color: 'black'}]}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 40,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',

    },
    txtsty: {fontSize: 16, color: 'black'},
    one: {
        backgroundColor: '#00aaf6'
    },
    sec: {
        backgroundColor: 'white'
    },
    txt1: {
        color: 'black',
    },
    txt2: {
        color: 'white',
    }
});