'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    AsyncStorage, TouchableOpacity, Image,
    DeviceEventEmitter
} from 'react-native';

import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

import CityList from './IndexListView';

// 下面是数据部分
import DATA_JSON from '../../common/citylist.json';
import NavigationDispatchUtil from '../../navigation/NavigationDispatchUtil';
import color from "../../common/color";

const NOW_CITY_LIST = [
    {
        "districtName": "",
        "districtId": 0,
        "cityId": 197,
        "cityName": "安庆",
        "name": "安庆",
        "cityAcronym": "anqing"
    }
];
const ALL_CITY_LIST = DATA_JSON.allCityList;
const HOT_CITY_LIST = DATA_JSON.hotCityList;
const LAST_VISIT_CITY_LIST = DATA_JSON.lastVisitCityList;

export default class CityScene extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '选择城市',
            headerStyle: {backgroundColor: color.theme, height: 48},
            headerTitleStyle: {color: 'white', fontSize: 20,alignSelf: 'center'},
            headerLeft: <TouchableOpacity activeOpacity={0.6} onPress={() => {
                navigation.goBack()
            }}>
                <Image style={{width: 22, height: 22, marginLeft: 6}}
                       source={require('../../img/icon_back_one.png')}/>
            </TouchableOpacity>
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            showSearchResult: false,
            keyword: '',
            searchResultList: [],
            allCityList: ALL_CITY_LIST,
            hotCityList: HOT_CITY_LIST,
            lastVisitCityList: LAST_VISIT_CITY_LIST,
            nowCityList: NOW_CITY_LIST
        };
    }



    onChanegeTextKeyword(newVal) {
        if (newVal === '') {
            this.setState({showSearchResult: false});
        } else {
            // 在这里过滤数据结果
            let dataList = this.filterCityData(newVal);

            this.setState({keyword: newVal, showSearchResult: true, searchResultList: dataList});
        }
    }

    filterCityData(text) {
        console.log('search for list', text);

        let rst = [];
        for (let idx = 0; idx < ALL_CITY_LIST.length; idx++) {
            let item = ALL_CITY_LIST[idx];
            if (item.cityName.indexOf(text) === 0 || item.cityAcronym.indexOf(text) === 0) {
                rst.push(item);
            }
        }
        return rst;
    }

    onSelectCity(cityJson) {
        if (this.state.showSearchResult) {
            this.setState({showSearchResult: false, keyword: ''});
        }
        DeviceEventEmitter.emit('cityId',cityJson.cityId);
        this.props.navigation.state.params.callback(cityJson.cityName);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Header onPressBack={this.onPressBack.bind(this)} title="选择城市"/>*/}
                <SearchBox
                    keyword={this.state.keyword}
                    onChanegeTextKeyword={(vv) => {
                        this.onChanegeTextKeyword(vv)
                    }}/>{this.state.showSearchResult
                ? (<SearchResult
                    keyword={this.state.keyword}
                    onSelectCity={this.onSelectCity.bind(this)}
                    searchResultList={this.state.searchResultList}/>)
                : (
                    <View style={{flex: 1}}>
                        <CityList
                            onSelectCity={this.onSelectCity.bind(this)}
                            allCityList={this.state.allCityList}
                            hotCityList={this.state.hotCityList}
                            lastVisitCityList={this.state.lastVisitCityList}
                            nowCityList={this.state.nowCityList}/>
                    </View>
                )}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        // paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    },
    currentCity: {
        backgroundColor: '#ffffff',
        height: 20,
        margin: 5
    },
    currentCityText: {
        fontSize: 16
    }
});
