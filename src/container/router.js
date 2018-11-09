import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './AAA'
import DetailScreen from './DetailScreen'
const Awesome = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home'
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            headerTitle: 'Detail'
        }
    },
});
export default Awesome;
