import React from "react";
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { getRepos } from '../Utils/api';

export class DashboardScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });

    makeBackground(btn){
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }

        if (btn === 0 ){
            obj.backgroundColor = '#48BBEC';
        } else if(btn === 1){
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }

        return obj;
    }

    goToProfile(){
        this.props.navigation.navigate(
            'Profile',{
                userInfo: this.props.navigation.state.params.userInfo,
                title: 'Profile Page'
            });
    }
    goToRepos(){
        let userInfo = this.props.navigation.state.params.userInfo;
        console.log(userInfo)
        getRepos(userInfo.login)
            .then((res) => {
                console.log(res)
                this.props.navigation.navigate(
                    'Repositories',{
                        userInfo: userInfo,
                        repos: res,
                        title: 'Repositories Page'
                    });
            });

    }
    goToNotes(){

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.navigation.state.params.userInfo.avatar_url}}
                    style={styles.image}/>
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Repo</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>View Notes</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});