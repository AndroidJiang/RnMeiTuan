import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    RefreshControl
} from 'react-native';
import color from "../../common/color";
import {screen, system} from '../../common/common'
import MyItemView from "./MyItemView";
import SepratorView from "./SepratorView";

export default class MineScene extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            header: null,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
        }
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white',}} refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({isRefreshing: true}, () => {
                            this.timer = setTimeout(() => {
                                this.setState({isRefreshing: false})
                            }, 1000);
                        })
                    }
                    }
                    colors={['#8ff7ff', '#db8dff', '#0000ff']}
                />
            }>
                <View style={{flex: 1}}>
                    <View style={{
                        height: 100,
                        width: screen.width,
                        backgroundColor: '#fff',
                    }}>
                        <View style={{
                            height: 75,
                            width: screen.width,
                            backgroundColor: '#06C1AE'
                        }}>
                            <View style={{
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 10,
                                paddingRight: 10,
                                alignItems: 'center',
                                width: screen.width,

                            }}>
                                <TouchableOpacity onPress={() => {
                                    Alert.alert('点击设置')
                                }} activeOpacity={0.8}>
                                    <Image style={styles.img} source={require('../../img/Mine/icon_setting.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    Alert.alert('点击消息')
                                }} activeOpacity={0.8}>
                                    <Image style={styles.img} source={require('../../img/Mine/icon_message.png')}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Image style={{position: 'relative', top: -25, width: 50, height: 50, alignSelf: 'center'}}
                               source={require('../../img/Mine/icon_userreview_defaultavatar.png')}/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: 'black'}}>请点击登录</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 65,
                            width: screen.width,
                            justifyContent: 'space-around',
                        }}>
                            <MyItemView icon={require('../../img/Mine/icon_mine_collection.png')} title='收藏'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_comment.png')} title='评价'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_zuji.png')} title='足迹'/>
                        </View>

                        <SepratorView/>

                        <Text
                            style={{
                                lineHeight: 30,
                                fontSize: 12,
                                fontWeight: 'bold',
                                alignSelf: 'flex-start',
                                marginLeft: 15, color: '#262626',
                            }}>我的资产</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 65,
                            width: screen.width,
                            justifyContent: 'space-around',
                        }}>
                            <MyItemView icon={require('../../img/Mine/icon_mine_wallet.png')} title='钱包'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_balance.png')} title='余额'/>
                            <MyItemView icon={require('../../img/Mine/icon_red_pack.png')} title='红包/卡券'/>
                            <MyItemView icon={require('../../img/Mine/icon_bank_card.png')} title='银行卡'/>
                        </View>

                        <SepratorView/>
                        <Text
                            style={{
                                lineHeight: 30,
                                fontSize: 12,
                                fontWeight: 'bold',
                                alignSelf: 'flex-start',
                                marginLeft: 15, color: '#262626',
                            }}>美团服务</Text>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 65,
                            width: screen.width,
                            justifyContent: 'space-around',
                        }}>
                            <MyItemView icon={require('../../img/Mine/icon_mine_membercenter.png')} title='会员中心'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_chongzhi.png')} title='手机充值'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_xinyong.png')} title='信用卡还款'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_fapiao.png')} title='发票助手'/>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 65,
                            width: screen.width,
                            justifyContent: 'space-around',
                        }}>
                            <MyItemView icon={require('../../img/Mine/icon_mine_friends.png')} title='好友去哪'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_customerService.png')} title='客服中心'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_coll.png')} title='我要合作'/>
                            <MyItemView icon={require('../../img/Mine/icon_mine_aboutmeituan.png')} title='关于美团'/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 20,
        height: 20,
    }
});