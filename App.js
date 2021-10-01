import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import AppStatus from "./components/AppStatus";
import BackgroundTask from "./components/BackgroundTask";
import ExpoSqlLiteManager from "./components/ExpoSqlLiteManager";
import RequestPermissionsAndroid from "./components/RequestPermissionsAndroid";
import MyChart from "./components/MyChart";

export default function App() {
    useEffect(() => {
        console.log("Starting App Root...")
        /*AppRegistry.registerHeadlessTask('BackgroundTask', () =>
            require('./components/BackgroundTask')
        );*/
    }, [])
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
            <View>
                <AppStatus/>
                <ExpoSqlLiteManager/>
                <RequestPermissionsAndroid/>
                <MyChart/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
