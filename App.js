import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { HomeScreen } from './src/components/Main'
import {DashboardScreen} from "./src/components/Dashboard";

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Dashboard: {
        screen: DashboardScreen
    },
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;