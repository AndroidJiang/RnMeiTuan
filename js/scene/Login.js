/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
export default class Login extends Component<{}> {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../app/img/about_logo.png')} style={styles.img}/>
                <TextInput style={styles.nameInput}
                           underlineColorAndroid={'transparent'}
                           placeholder="请输入用户名">

                </TextInput>
                <TextInput style={styles.pwInput}
                           underlineColorAndroid={'transparent'}
                           placeholder="请输入密码">

                </TextInput>
                <View style={styles.login}>
                    <TouchableHighlight activeOpacity={0.5} onPress={() => {
                        console.log('戳我')
                    }}>
                        <Text style={styles.textLogin}>
                            登录
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    img: {
        width: 70,
        height: 70,
        marginBottom: 30,

    },
    nameInput: {
        width: width - 20,
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        borderColor: 'gray'

    },
    pwInput: {
        width: width - 20,
        marginBottom: 1,
        borderWidth: 1,
        height: 40,
        marginTop: 5,
        borderRadius: 5,
        borderColor: 'gray'

    },
    login: {
        marginTop: 20,
    },
    textLogin: {
        fontSize: 20,
        textAlign: 'center',
        width: width - 20,
        backgroundColor: "green",
        color: 'white',
        padding: 5
    },

});
