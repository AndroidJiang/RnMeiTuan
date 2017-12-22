/**
 * Created by liuyan on 2017/12/22.
 */
import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    Text,
    ViewPagerAndroid,
    Button,
    Alert,
    TouchableOpacity, StatusBar
} from 'react-native';
import Swiper from '../widget/swiper';
import NavigationDispatchUtil from '../navigation/NavigationDispatchUtil';
const {w, h} = Dimensions.get('window');

// import guideone from 'guideone';

export default class Guide extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            imgOne: require('../../app/img/icon_point_selected.png'),
            imgSec: require('../../app/img/icon_point.png'),
            imgThird: require('../../app/img/icon_point.png'),
        }
    }


    onButtonPress = () => {
        // this.props.navigation.navigate('Login');
        NavigationDispatchUtil.reset(this.props.navigation, 'Login');
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar animated={true} hidden={true} translucent={true}/>
                <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
                    <ViewPagerAndroid initialPage={0} style={{flex: 1}}
                                      ref={viewPager => {
                                          this.viewPager = viewPager;
                                      }}
                                      onPageSelected={(event) => {
                                          if (event.nativeEvent.position == 0) {
                                              this.setState({
                                                  imgOne: require('../../app/img/icon_point_selected.png'),
                                                  imgSec: require('../../app/img/icon_point.png'),
                                                  imgThird: require('../../app/img/icon_point.png'),
                                              });
                                          } else if (event.nativeEvent.position == 1) {
                                              this.setState({
                                                  imgOne: require('../../app/img/icon_point.png'),
                                                  imgSec: require('../../app/img/icon_point_selected.png'),
                                                  imgThird: require('../../app/img/icon_point.png'),
                                              });
                                          } else {
                                              this.setState({
                                                  imgOne: require('../../app/img/icon_point.png'),
                                                  imgSec: require('../../app/img/icon_point.png'),
                                                  imgThird: require('../../app/img/icon_point_selected.png'),
                                              });
                                          }

                                      }}>
                        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                            <Text>One</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
                            <Text>Second</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
                            <Text>Third</Text>
                            <TouchableOpacity onPress={this.onButtonPress} activeOpacity={0.6}>
                                <Text style={{
                                    width: 120,
                                    height: 36,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    marginTop: 30,
                                    textAlign: 'center',
                                    textAlignVertical:'center',
                                    borderColor: "deepskyblue",
                                    fontSize: 20,
                                    color: "deepskyblue",
                                }}>立即体验</Text>
                            </TouchableOpacity>
                        </View>
                    </ViewPagerAndroid>
                </View>

                <View style={{
                    width: Dimensions.get('window').width,
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    position: "absolute",
                    bottom: 5,
                }}>
                    <Image source={this.state.imgOne}
                           style={{width: 20, height: 20}}/>
                    <Image source={this.state.imgSec}
                           style={{width: 20, height: 20, marginLeft: 5}}/>
                    <Image source={this.state.imgThird}
                           style={{width: 20, height: 20, marginLeft: 5}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});