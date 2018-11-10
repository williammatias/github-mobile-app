import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Badge from './Badge';
import {Separator} from './Helpers/Separator'

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

export class ProfileScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });


    getRowTitle(item) {
        var item = (item === 'public_repos') ? item.replace('_', ' ') : item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

    render() {
        const {navigation} = this.props;

        var userInfo = navigation.getParam('userInfo', {});
        var topicArr = ['company', 'location', 'followers', 'following', 'email',
            'bio', 'public_repos'];
        var list = topicArr.map((item, index) => {
            if (!userInfo[item]) {
                return <View key={index}/>
            } else {
                return (
                    <View key={index}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
                            <Text style={styles.rowContent}> {userInfo[item]} </Text>
                        </View>

                        <Separator/>
                    </View>
                )
            }
        });
        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={userInfo}/>
                {list}
            </ScrollView>
        )
    }
}

ProfileScreen.propTypes = {
    userInfo: PropTypes.object.isRequired
};