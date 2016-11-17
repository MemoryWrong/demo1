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
    Platform,
} from 'react-native';
import CustomList from './List/CustomList';
import {data} from './service/API';

export default class App extends Component {
    componentDidMount(){
        InteractionManager.runAfterInteractions(()=> {
            //long-running synchronous task...
            
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>ListView Demo</Text>
                </View>
                <CustomList data={data()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS === 'ios') ? 18 : 0,
        backgroundColor: '#f4f5f6',
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
    header:{
        backgroundColor:'#ffffff',
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#dddddd',
    },
    headerText:{
        color:'#111111',
        fontSize:24,
    }
});

