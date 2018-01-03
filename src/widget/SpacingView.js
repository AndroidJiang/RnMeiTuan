/*
* 空行
* */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from '../common/color'

// create a component
class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: color.background,
    },
});

//make this component available to the app
export default SpacingView;
