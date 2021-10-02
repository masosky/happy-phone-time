import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function NativeStats() {
    return (
        <View style={styles.container}>
            <Text>NativeStats</Text>
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