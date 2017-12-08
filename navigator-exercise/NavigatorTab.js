// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class RecentChat extends React.Component {
    render() {
        return <Text style={{marginTop: 50 }}>Hey... RecentChat RecentChat RecentChat</Text>
    }
};

class AllChat extends React.Component {
    render() {
        return <Text style={{ marginTop: 50 }}>Hey... AllChat AllChat AllChat AllChat AllChat</Text>
    }
};

const MainScreenNavigator = TabNavigator({
    Recent: {
        screen: RecentChat
    },
    All: {
        screen: AllChat,
    }
});
export default MainScreenNavigator;
