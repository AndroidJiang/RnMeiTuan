'use strict';
import React, {Component} from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

var that = null;

export default class SearchResult extends Component {
    constructor(props) {

        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            ds: ds
        };

        that = this;

    }

    _cityNameClick(cityJson) {
        that.props.onSelectCity(cityJson);
    }

    renderRow(cityJson) {
        let keyword = this.props.keyword;
        let KK = (
            <Text style={{
                color: 'red'
            }}>{keyword}</Text>
        );

        let Name1 = '';
        if (cityJson.name.indexOf(keyword) === 0) {
            Name1 = (<Text>{KK}{cityJson.name.replace(keyword,'')}</Text>);
        } else {
            Name1 = (<Text>{cityJson.name}</Text>);
        }

        let Name2 = '';
        if (cityJson.cityAcronym.indexOf(keyword) === 0) {
            Name2 = (<Text>{KK}{cityJson.cityAcronym.replace(keyword,'')}</Text>);
        } else {
            Name2 = (
                <Text>{cityJson.cityAcronym}</Text>
            );
        }

        // console.log(Name1, Name2);

        return (
            <TouchableOpacity
                key={'list_item_' + cityJson.id}
                style={styles.rowView}
                onPress={() => {
                that._cityNameClick(cityJson)
            }}>
                <View style={styles.rowdata}>
                    <Text style={styles.rowdatatext}>{Name1} / {Name2}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {

        console.log(this.props.searchResultList);

        return (
            <View style={styles.container}>
                <ListView
                  enableEmptySections={true}
                    contentContainer={styles.contentContainer}
                    dataSource={this.state.ds.cloneWithRows(this.props.searchResultList)}
                    renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flexDirection: 'row',
        width: width,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    rowView: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 0.5
    },
    rowdata: {
        paddingTop: 10,
        paddingBottom: 2
    },

    rowdatatext: {
        color: 'gray',
        width: width
    }
});
