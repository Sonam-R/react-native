// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RootNavigator from './navigator';
import MainScreenNavigator from './NavigatorTab';
import { StackNavigator } from 'react-navigation';



export default class App extends React.Component {
    render() {
        // return <RootNavigator />;
        return <MainScreenNavigator />;
    }
}

