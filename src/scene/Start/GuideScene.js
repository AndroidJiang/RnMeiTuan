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
    ImageBackground,
    TouchableOpacity, StatusBar, AsyncStorage
} from 'react-native';
import NavigationDispatchUtil from '../../navigation/NavigationDispatchUtil';
const {w, h} = Dimensions.get('window');

// import guideone from 'guideone';

export default class Guide extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            imgOne: require('../../img/icon_point_selected.png'),
            imgSec: require('../../img/icon_point.png'),
            imgThird: require('../../img/icon_point.png'),
        }
    }


    onButtonPress = () => {
        // this.props.navigation.navigate('Login');
        AsyncStorage.setItem("isFirst", "1")
            .then(() => {
                AsyncStorage.multiGet(['isFirst', 'hasChoose'])
                    .then((result) => {
                        if ("1" === result[1][1]) {
                            NavigationDispatchUtil.reset(this.props.navigation, 'Main')
                        } else {
                            NavigationDispatchUtil.reset(this.props.navigation, 'Choose')
                        }
                    })
                    .catch((error) => {
                        NavigationDispatchUtil.reset(this.props.navigation, 'Choose')
                    });
            });
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
                                                  imgOne: require('../../img/icon_point_selected.png'),
                                                  imgSec: require('../../img/icon_point.png'),
                                                  imgThird: require('../../img/icon_point.png'),
                                              });
                                          } else if (event.nativeEvent.position == 1) {
                                              this.setState({
                                                  imgOne: require('../../img/icon_point.png'),
                                                  imgSec: require('../../img/icon_point_selected.png'),
                                                  imgThird: require('../../img/icon_point.png'),
                                              });
                                          } else {
                                              this.setState({
                                                  imgOne: require('../../img/icon_point.png'),
                                                  imgSec: require('../../img/icon_point.png'),
                                                  imgThird: require('../../img/icon_point_selected.png'),
                                              });
                                          }

                                      }}>
                        <View >
                            <Image
                                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                                source={require('../../img/ic_guide_pic_one.png')}
                                resizeMode={Image.resizeMode.cover}/>
                        </View>
                        <View >
                            <Image
                                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                                source={require('../../img/ic_guide_pic_two.png')}
                                resizeMode={Image.resizeMode.cover}/>
                        </View>
                        <View>
                            <ImageBackground
                                style={{
                                    width: Dimensions.get('window').width,
                                    height: Dimensions.get('window').height,
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    paddingBottom: 50,
                                }}
                                source={require('../../img/ic_guide_pic_three.png')}
                                resizeMode={Image.resizeMode.cover}>
                                <TouchableOpacity onPress={this.onButtonPress} activeOpacity={0.6}>
                                    <Text style={{
                                        width: 120,
                                        height: 36,
                                        padding:5,
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        borderColor: "deepskyblue",
                                        fontSize: 15,
                                        color: "deepskyblue",
                                    }}>开启好友去哪</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    </ViewPagerAndroid>
                </View>

                <View style={{
                    width: Dimensions.get('window').width,
                    height: 24,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    position: "absolute",
                    bottom: 5,
                }}>
                    <Image source={this.state.imgOne}
                           style={{width: 15, height: 15}}/>
                    <Image source={this.state.imgSec}
                           style={{width: 15, height: 15, marginLeft: 5}}/>
                    <Image source={this.state.imgThird}
                           style={{width: 15, height: 15, marginLeft: 5}}/>
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