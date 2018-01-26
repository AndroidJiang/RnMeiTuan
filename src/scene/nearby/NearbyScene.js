/**
 * Created by liuyan on 2018/1/9.
 */
import React, {Component} from 'react';

import {View, Image, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import {screen, system} from '../../common/common';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import NearbyItemListView from "./NearbyItemListView";
import color from "../../common/color";
export default class NearbyScene extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <View
                style={{
                    width: screen.width,
                    backgroundColor: color.theme,
                    flexDirection: 'row',
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                }}>
                <Text style={{fontSize: 18, color: '#515151',}}>彭浦科技园</Text>
                <Image style={{width: 16, height: 16, marginLeft: 2}}
                       source={require('../../img/icon_down.png')}/>
                <TouchableOpacity style={styles.searchBar} onPress={() => navigation.state.params.navigatePress()}>
                    <Image source={require('../../img/search_icon.png')} style={styles.searchIcon}/>
                    <Text>找附近的吃喝玩乐</Text>
                </TouchableOpacity>
            </View>,
            headerStyle: {height: 48, backgroundColor: 'white'},

        };
    }

    componentDidMount() {
        this.props.navigation.setParams({navigatePress: this.searchClick})
    }

    searchClick = () => {
        this.props.navigation.navigate('SearchScene');
    }

    render() {
        let titles = ['享美食', '住酒店', '爱玩乐', '全部'];
        let types = [
            ['全部', '面包甜点', '小吃快餐', '川湘菜', '日韩料理',  '台湾菜',],
            ['全部', '青年旅社', '经济酒店', '豪华酒店', '主题酒店', '公寓型酒店'],
            ['全部', 'KTV', '足疗按摩', '洗浴/汗蒸', '其他娱乐', '运动健身', '桌游/电玩'],
            []
        ];
        return (
            <View style={{flex: 1}}>
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar tabStyle={{paddingBottom: 0}}
                                                       textStyle={{fontSize: 16}}/>}
                    tabBarUnderlineStyle={{
                        backgroundColor: '#ea7762',
                        height: 2,
                    }}

                    tabBarBackgroundColor="#fcfcfc"
                    tabBarActiveTextColor="#ea7762"
                    tabBarInactiveTextColor="#777777"
                    initialPage={0}
                >
                    {
                        titles.map((item, i) => (
                            <NearbyItemListView tabLabel={item} title = {item} key={item} type={types[i]}
                                                navigation={this.props.navigation}/>
                        ))
                    }
                </ScrollableTabView>
            </View>
        );
    }

}
// define your styles
const styles = StyleSheet.create({

    searchBar: {
        flex: 1,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 5,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }
});