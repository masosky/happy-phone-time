import {Text, View, AppState, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";

export default function AppStatus() {
    const [appState, setAppState] = useState(AppState.currentState)
    const _handleAppStateChange = (nextAppState) => {
        if (appState.match(/inactive|background/) && nextAppState === 'active'
        ) {
            console.log('App has come to the foreground!. save this time');
        }
        console.log('App sent to the background!. save this time. ');
        /// difference between both the times is the time spent by user on app
        setAppState(nextAppState);
    };
    useEffect(() => {
        console.log("Starting AppStatus...")
        AppState.addEventListener('change', _handleAppStateChange);
        return () => {
            console.log("Exiting AppStatus...")
            AppState.removeEventListener('change', _handleAppStateChange);
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text>AppStatus</Text>
            <Text>{appState}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#998f87',
        alignItems: 'center',
        justifyContent: 'center',
    },
});