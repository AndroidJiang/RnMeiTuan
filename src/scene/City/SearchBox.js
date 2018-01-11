'use strict';
import React, {Component} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
} from 'react-native';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

    }

    onEndEditingKeyword(vv) {
        console.log(vv);
    }

    onChanegeTextKeyword(vv) {
        console.log('onChanegeTextKeyword', vv);

        this.setState({value: vv});
        this.props.onChanegeTextKeyword(vv);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <View style={styles.inputIcon}>
                    </View>
                    <TextInput ref="keyword" autoCapitalize="none" value={this.props.keyword}
                               onChangeText={this.onChanegeTextKeyword.bind(this)} returnKeyType="search" maxLength={20}
                               style={styles.inputText} underlineColorAndroid="transparent"
                               placeholder={'输入城市名或拼音查询'}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
        paddingBottom: 5
    },
    inputBox: {
        height: Platform.OS === 'ios'
            ? 30
            : 40,
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E6E7E8'
    },
    inputIcon: {
        margin: Platform.OS === 'ios'
            ? 5
            : 10
    },
    inputText: {
        alignSelf: 'flex-end',
        marginTop: Platform.OS === 'ios'
            ? 0
            : 0,
        flex: 1,
        height: Platform.OS === 'ios'
            ? 30
            : 40,
        marginLeft: 2,
        marginRight: 5,
        fontSize: 12,
        lineHeight: 30,
        textAlignVertical: 'bottom',
        textDecorationLine: 'none'
    }
});
