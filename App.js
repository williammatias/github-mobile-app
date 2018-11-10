import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from './src/components/Main'
import {DashboardScreen} from "./src/components/Dashboard";
import {ProfileScreen} from "./src/components/Profile";
import RepositoriesScreen from "./src/components/Repositories";
import {WebViewScreen} from "./src/components/Helpers/WebView";

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Dashboard: {
        screen: DashboardScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    Repositories: {
        screen: RepositoriesScreen
    },
    WebView: {
        screen: WebViewScreen
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;