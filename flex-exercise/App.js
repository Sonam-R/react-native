import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:"grey", height: 70, flexDirection: 'row',justifyContent: 'space-between',}}>
                    <View style={{margin:10, flex:1,}}>
                        <View style={{backgroundColor:"#fff", width: 50, height: 50, borderRadius: 50, flex:1,}}></View>
                    </View>
                    <View style={{flexDirection: 'row', flex: 2, marginLeft: 20, justifyContent: 'space-around',}}>
                        <View style={{backgroundColor:"#fff", flex:1, marginTop: 15, height: 40}}></View>
                        <View style={{backgroundColor:"#fff", flex:1, marginTop: 15, marginLeft: 10, marginRight: 10, height: 40}}></View>
                    </View>
                </View>
                <View style={{backgroundColor: "#fff", height: 200, flexDirection: 'row', margin: 15,}}>
                    <View style={{backgroundColor: "grey", flex: 1,}}></View>
                </View>
                <View style={{height: 130, flexDirection: 'row', justifyContent: 'space-around',}}>
                    <View style={{backgroundColor: "grey", margin: 10, height: 100, flex: 1,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 100, flex: 1,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 100, flex: 1,}}></View>
                </View>
                <View style={{height: 150, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                    <View style={{backgroundColor: "grey", margin: 10, height: 50, width: 50,}}></View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                    <View style={{backgroundColor: "grey", height: 60, width: 60, borderRadius: 60, marginTop: 30, marginTop: 30}}></View>
                    <View style={{backgroundColor: "grey", height: 60, width: 60, borderRadius: 60, marginTop: 30, marginTop: 30 }}></View>
                    <View style={{backgroundColor: "grey", height: 60, width: 60, borderRadius: 60, marginTop: 30, marginTop: 30 }}></View>
                </View>
            </View>
            );
        };
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    },
});