/**
 * Created by liuyan on 2017/12/25.
 */
import React, {Component} from 'react';

import {View, Image, Text, StatusBar, AsyncStorage, DeviceEventEmitter} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from "react-native-scrollable-tab-view";
import ItemListView from "../widget/ItemListView";
var typeIds = [];
var typeNames = [];

export default class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       style={{width: 20, height: 20, tintColor: tintColor}}
                       source={require('../../app/img/icon_home.png')}
                />
            ),
            headerTitle: '首页',
            headerStyle: {height: 48, backgroundColor: '#00aaf6'},
            headerTitleStyle: {alignSelf: 'center', fontSize: 22, color: 'white', fontWeight: 'normal'},
            headerRight: <Text style={{width: 25, height: 25, marginRight: 10}}></Text>,
            headerLeft: <Text style={{width: 25, height: 25, marginLeft: 10}}></Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            typeIds: [],
            typeNames: [],
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

        this.subscription = DeviceEventEmitter.addListener('changeType', (ids, names) => {
            console.log(ids + ',' + names);
            typeIds = JSON.parse(ids);
            typeNames = JSON.parse(names);
            this.setState({typeIds: typeIds, typeNames: typeNames})
        });

        AsyncStorage.multiGet(['data', 'name'], (error, result) => {
            typeIds = JSON.parse(result[0][1]);
            typeNames = JSON.parse(result[1][1]);
            if (null === typeIds || typeIds.length === 0) {
                this.setState({
                    typeIds: [8, 11, 19],
                    typeNames: ['汽车迷', '辣妈帮', '体育迷'],
                })
            } else {
                this.setState({
                    typeIds: typeIds,
                    typeNames: typeNames,
                })
            }
        });
    }

    componentWillUnmount() {
        this.subscription.remove();
    }


    render() {
        var views = [];
        this.state.typeNames.map((item, index) => {
            views.push(
                <ItemListView key={item} tabLabel={item} id={this.state.typeIds[index]}
                              navigation={this.props.navigation}/>
            );
        });
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#0E99F6' translucent={false} hidden={false}/>
                <ScrollableTabView renderTabBar={() => <ScrollableTabBar tabStyle={{paddingBottom: 0}}
                                                                         textStyle={{fontSize: 16}}/>}
                                   tabBarUnderlineStyle={{
                                       backgroundColor: '#00aaf6',
                                       height: 2,
                                   }}
                                   tabBarBackgroundColor="#fcfcfc"
                                   tabBarActiveTextColor="#3e9ce9"
                                   tabBarInactiveTextColor="#aaaaaa"
                                   initialPage={0}
                >
                    {views}
                </ScrollableTabView>
            </View>
        );
    }
}