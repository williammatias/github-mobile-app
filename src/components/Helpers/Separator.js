import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';


var styles = StyleSheet.create({
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: '#E4E4E4',
        marginLeft: 15
    }
});

export class Separator extends Component{
    render(){
        return (
            <View style={styles.separator}/>
        )
    }
}

