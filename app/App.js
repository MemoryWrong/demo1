/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
} from 'react-native';
import CustomList from './List/CustomList';
import {data} from '../service/API';

export default class App extends Component {
    componentDidMount(){
        InteractionManager.runAfterInteractions(()=> {
            //long-running synchronous task...
            
        });
    }
    render() {
        return (
            <View style={styles.container}>
               <CustomList data={data()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

