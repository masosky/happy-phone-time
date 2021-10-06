import {Button, NativeModules, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";

const {AwesomeModule} = NativeModules;

export default function NativeCustomComponent() {
    const [name, setName] = useState("undefined")
    const onPresFunc = async () => {
        const res = await AwesomeModule.multiply(1, 2)
        const metrics = await AwesomeModule.getMetrics()
        console.log(JSON.stringify(res))
        console.log(JSON.stringify(metrics))
        setName(JSON.stringify(AwesomeModule))
    }
    return (
        <View style={styles.container}>
            <Text>NativeCustomComponent</Text>
            <Text>{name}</Text>
            <Button title="Button" onPress={onPresFunc} color="#841584"
                    accessibilityLabel="Learn more about this purple button">Button</Button>
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