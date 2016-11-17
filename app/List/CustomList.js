import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    InteractionManager,
    Dimensions,
    Image,
} from 'react-native';
import {Http} from '../service/service'

var {width, height} = Dimensions.get('window');
const api_endpoint = 'https://jsonplaceholder.typicode.com/posts/';
export default class CustomList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // console.log(Http);
        //this custom list is treated as a new component, you can use it if input the data as
        //dataSource, make sure the data is format of array.
        this.state = {
            data: this.props.data,
            dataSource: ds.cloneWithRows([]),
            loaded: false,
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=> {
            this.fetch()
        })
    }

    fetch() {
        this.initRequest(api_endpoint).then((json)=> {
            console.log(json)
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(json),
                loaded: true,
                loadMore: false,
                refresh: false,
            });
        }).done()

    }

    //some times the params will be very complex.... so get this initRequest func individually....
    initRequest(url) {
        return Http(url);
    }

    //loadMoreData when loading to the end.... do some actions.
    loadMoreData() {
        console.log('loading....')
    }

    //refreshData when pull the list .... do some actions.
    refreshData() {
        console.log('refresh....')
    }

    renderRow(rowData) {
        return (
            <View style={styles.row}>
                <View>
                    <Text>{rowData.id}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>{rowData.title}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.body}>{rowData.body}</Text>
                </View>
                <View style={{flex:1}}></View>
                <View style={{justifyContent:'center'}}>
                    <Image style={styles.arrow} source={require('../img/arrow_detail_gray.png')}/>
                </View>
            </View>
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <Text>Loading....</Text>
            </View>
        )
    }

    renderLoadingMoreView() {
        return (
            <View style={styles.loadingMore}>
                <Text>Loading More....</Text>
            </View>
        )
    }

    renderRefreshView() {
        return (
            <View style={styles.loading}>
                <Text>Refresh More....</Text>
            </View>
        )
    }

    loadingMoreData() {
        console.log('loading more data....')
        this.setState({
            loadMore: true,
        })
    }

    refreshData() {
        console.log('refreshing more data....')
        this.setState({
            refresh: true,
        })
    }

    render() {
        return (
            <View>
                {!this.state.loaded &&
                this.renderLoadingView()
                }
                {this.state.refresh &&
                this.state.renderRefreshView()
                }
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    enableEmptySections={true}
                    onEndReached={this.loadingMoreData.bind(this)}
                />
                {
                    this.renderLoadingMoreView()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#dddddd',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
    },
    loading: {
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',

    },
    loadingMore: {
        backgroundColor: 'red',
        height: 40,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: 200,
        color: '#666666',
        fontSize: 10,
    },
    body: {
        width: 300,
        color: '#111111',
        fontSize: 14,
    },
    arrow: {
        // paddingRight:10,
        marginRight: 10,
    }
})