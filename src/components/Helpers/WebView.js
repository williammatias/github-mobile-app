
import React, { Component } from 'react';
import {
    View,
    WebView,
    StyleSheet,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
    webview: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        width: deviceWidth,
        height: deviceHeight
    }
});


export class WebViewScreen extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    render(){
        const {navigation} = this.props;

        var url = navigation.getParam('url', '');
        console.log(url);
        return(
            <View style={{flex:1}}>
                {/*<WebView source={{uri: 'https://github.com/williammatias/fishcave'}}/>*/}
                <WebView
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true} />

            </View>
        )
    }
}

// WebViewScreen.propTypes = {
//     url: PropTypes.string.isRequired
// }