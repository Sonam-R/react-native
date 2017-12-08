// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import RootNavigator from './navigator';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends  React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello.. This is Home page</Text>
                <Button title="Go to Profile" onPress={() => navigate('Profile', {user: 'Sonam'})}></Button>
            </View>
        );
    }
}