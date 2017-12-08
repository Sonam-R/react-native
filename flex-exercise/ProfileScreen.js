// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RootNavigator from './navigator';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends  React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Chat with ${navigation.state.params.user}',
    });
    render() {
        const { params } = this.props.navigation.state;
        return <Text>Chat with {params.user}</Text>;
    }
}