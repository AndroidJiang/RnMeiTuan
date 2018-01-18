import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, TextInput, ListView, Dimensions} from "react-native";
import common from "../../common/screen";
import api, {foodSearch} from "../../common/api";

/*
 * 自定义首页的导航头
 * */
export default class SearchScene extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            recommend: [],
            dataSource: ds,
        };
    }

    componentDidMount() {
        this.getRecommend();
    }

    render() {
        var views = [];
        this.state.recommend.map((item, index) => {
            views.push(this.renderRecommendItem(item, index));
            // views.push(
            //     <TouchableOpacity style={{
            //         margin: 5,
            //         padding: 6,
            //         backgroundColor: '#eeeeee',
            //         borderRadius: 5,
            //         // height:30,
            //         alignItems:'center',
            //         justifyContent:'center'
            //     }} key={index} onPress={() => alert(item.word)}>
            //         <Text style={styles.recommendtv}>{item.word}</Text>
            //     </TouchableOpacity>
            // );
        });


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Image source={require('../../img/Food/search_icon.png')} style={styles.searchIcon}/>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid='transparent'
                            returnKeyType="search"
                            placeholder="搜索"
                            value={this.state.text}
                            onChangeText={this.textChange}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.cancleClick}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                </View>

                {this.viewContent(this.state.dataSource, views)}
            </View>
        )
    }

    viewContent = (dataSource, views) => {
        if (dataSource.rowIdentities[0] != null && dataSource.rowIdentities[0].length > 0) {
            return (
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}

                />
            );
        }
        else
            return (<View>
                <Text style={{color: '#888888', fontSize: 12, margin: 5}}>热门搜索</Text>
                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                    {views}
                </View>
            </View>)

    };
    renderRecommendItem = (item, index) => {
        return (
            <TouchableOpacity style={{
                margin: 5,
                padding: 6,
                backgroundColor: '#eeeeee',
                borderRadius: 5,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center'
            }} key={index} onPress={() => alert(item.word)}>
                <Text key={index} style={styles.recommendtv}>{item.word}</Text>
            </TouchableOpacity>
        );
    }
    renderRow = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.onItemClick}>
                <View style={styles.item}>
                    <Image source={require('../../img/Food/search_icon.png')} style={styles.searchIcon}/>
                    <Text style={styles.content}>{item.keyword}</Text>
                    <Text style={styles.right}>约{item.total}个结果</Text>
                </View>
            </TouchableOpacity>
        );
    }
    renderSeparator = () => {
        return (
            <View style={{
                height: common.onePixel,
                backgroundColor: '#cccccc',
                width: Dimensions.get('window').width
            }}>

            </View>
        );
    };

    textChange = (text) => {
        this.getSearch(text);
    }
    getRecommend = () => {
        debugger;
        fetch(api.searchremmond)
            .then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
                this.setState({
                    recommend: responseData.data.markeduphotwords,
                });
            })
            .catch((error) => {
                alert('错误了' + error);
            })
    }

    getSearch = (input) => {
        fetch(foodSearch(input))
            .then((response) => response.json()) //把response转为json
            .then((responseData) => { // 上面的转好的json
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                });
            })
            .catch((error) => {
                alert('错误了' + error);
            })
    }
    recommendClick = (item) => {
        alert('点击');
    }
    cancleClick = () => {
        this.props.navigation.goBack();
    }
    onItemClick = (item) => {
        alert('跳转到下一页');
        // this.props.navigation.navigate('SearchScene');
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    recommendtv: {
        // margin: 5,
        // padding: 6,
        // backgroundColor: '#eeeeee',
        // borderRadius: 5,
        color: '#111111',
        fontSize: 12,
    },
    listView: {
        backgroundColor: 'white',
        borderTopWidth: common.onePixel,
        borderColor: 'black',
    },
    header: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,


    },
    search: {
        height: 30,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        borderRadius: 15,
        margin: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    content: {
        color: '#222222',
    },
    right: {
        position: 'absolute',
        right: 5,
        color: 'gray',
        fontSize: 11,
    },
    input: {
        flex: 1,
        height: 45,
        marginRight: 5,
    },
    searchIcon: {
        width: 18,
        height: 18,
        margin: 5,
        tintColor: '#aaaaaa'
    }
});