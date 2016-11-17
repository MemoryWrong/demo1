import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,

} from 'react-native';
import {Http} from '../../service/service'

export default class CustomList extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // console.log(this.props.data)
        Http();
        //this custom list is treated as a new component, you can use it if input the data as
        //dataSource, make sure the data is format of array.
        this.state ={
            data:this.props.data,
            dataSource:ds.cloneWithRows(this.props.data)
        }
    }

    //loadMoreData when loading to the end.... do some actions.
    loadMoreData(){
        console.log('loading....')
    }

    //refreshData when pull the list .... do some actions.
    refreshData(){
        console.log('refresh....')
    }

    renderRow(rowData){
        return(
            <View style={styles.row}>
                <Text>{rowData.id}</Text>
                <Text>{rowData.title}</Text>
                <Text>{rowData.body}</Text>
            </View>
        )
    }
    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    row:{
        backgroundColor:'#ffffff',
        borderBottomWidth:1,
        borderColor:'#dddddd',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
    }
})