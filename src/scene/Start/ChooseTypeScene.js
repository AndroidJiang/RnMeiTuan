/**
 * Created by liuyan on 2017/12/26.
 */
import React, {Component} from 'react';
import {
    View, Text, FlatList, Dimensions, TouchableWithoutFeedback, Alert, ToastAndroid, TouchableOpacity,
    ActivityIndicator, StatusBar, Platform, StyleSheet, AsyncStorage
} from 'react-native';
import NavigationDispatchUtil from '../../navigation/NavigationDispatchUtil';
import color from "../../common/color";

var TypeIds = [];
var typeNames = [];

export  default class ChooseType extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '分类',
            headerStyle: {backgroundColor: '#00aaf6', height: 48},
            headerTitleStyle: {fontSize: 22, color: 'white', fontWeight: 'normal'},
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
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: Dimensions.get('window').width,
                    backgroundColor: 'white'
                }}>
                    <Text style={{color: '#62656d', fontSize: 18}}>初次见面,请选择您感兴趣的1-5个类别</Text>
                </View>
                <View style={{width: 320, paddingRight: 20}}>

                    <FlatList data={this.state.dataSource}
                              keyExtractor={this._keyExtractor}
                              renderItem={this._renderItem}
                              ItemSeparatorComponent={this._renderSeparator}
                              extraData={this.state}//为了能更新 需要指定这个
                              ListHeaderComponent={this._renderHeader}
                              onRefresh={this._getRequestData}
                              refreshing={this.state.isRefreshing}
                              numColumns={3}/>

                </View>
                <View style={{
                    width: Dimensions.get('window').width,
                    height: 60,
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._submit}>
                        <Text style={{
                            width: Dimensions.get('window').width - 30,
                            height: 40,
                            borderRadius: 6,
                            backgroundColor: '#00aaf6',
                            fontSize: 18,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: 'white'
                        }}>确认</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _submit = () => {
        const len = TypeIds.length;
        if (len === 0) {
            Alert.alert(
                '提示',
                '你确定不选择任何分类吗?',
                [
                    {
                        text: '取消', onPress: () => {
                    }
                    },
                    {
                        text: '确定', onPress: () => {
                        AsyncStorage.setItem("hasChoose", "1", (error) => {
                            NavigationDispatchUtil.reset(this.props.navigation, 'Main')
                        });
                    }
                    },
                ]
            )
        } else {
            AsyncStorage.multiSet([["data", JSON.stringify(TypeIds)], ["name", JSON.stringify(typeNames)], ['hasChoose', '1']], (error) => {
                NavigationDispatchUtil.reset(this.props.navigation, 'Main');
            });
        }
    };

    _renderHeader = () => {
        return (
            <View style={{height: 10}}></View>
        );
    }

    _renderSeparator = () => {
        return (
            <View style={{height: 20}}></View>
        );
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

    _renderItem = ({item}) => {
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
    };

    _keyExtractor = (item) => item.id;
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 40,
        borderWidth: 1,
        marginLeft: 20,
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