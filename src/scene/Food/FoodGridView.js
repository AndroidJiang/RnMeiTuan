/*
* 美食中部
* */
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { color } from '../../common/index'
import { screen, system, tool } from '../../common/common'
import HomeGridItem from './FoodGridItem'

// create a component
class FoodGridView extends PureComponent {

    static defaultProps = {
        infos: []
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={() => this.props.onGridSelected(index)} />
                ))}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: color.border
    },
});

//make this component available to the app
export default FoodGridView;
