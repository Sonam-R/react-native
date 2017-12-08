import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { AppRegistry, Text, View, Button } from 'react-native';



const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: 'Profile',
        }
    }
});

export default RootNavigator;