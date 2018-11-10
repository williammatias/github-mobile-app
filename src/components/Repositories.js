import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import Badge from './Badge';
import {Separator} from './Helpers/Separator';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default class RepositoriesScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });

    openPage(url) {
        this.props.navigation.navigate(
            'WebView',{
                url: url,
                title: 'Web View'
            });
    }
    render() {
        const {navigation} = this.props;

        var repos = navigation.getParam('repos', {});
        var list = repos.map((repo, index) => {
            var desc = repo.description ? <Text style={styles.description}> { repo.description } </Text> : <View />;
            return (
                <View key={repo.id}>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={this.openPage.bind(this, repo.html_url)}
                            underlayColor='transparent'
                        >
                            <Text style={styles.name}> {repo.name} </Text>
                        </TouchableHighlight>
                        <Text style={styles.stars}> Stars: {repo.stargazers_count} </Text>
                        {desc}
                    </View>
                    <Separator />
                </View>
            );
        });
        return (

        <ScrollView style={styles.container}>
                <Badge userInfo={this.props.navigation.getParam('userInfo', {})} />
                {list}
            </ScrollView>
        )
    }
}
//
// RepositoriesScreen.propTypes = {
//     userInfo: PropTypes.object.isRequired,
//     repos: PropTypes.array.isRequired
// };