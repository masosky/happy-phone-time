import {StyleSheet, Text, View, Button} from "react-native";
import React, {useEffect} from "react";
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db")

export default function ExpoSqlLiteManager() {
    useEffect(() => {
        console.log("Starting ExpoSqlLiteManager...")
        db.transaction((tx) => {
            tx.executeSql("create table if not exists items (id integer primary key not null, done int, value text)")
        })
    }, [])
    const onPresFunc = () => {
        console.log("Pressing button")
        db.transaction((tx) => {
            tx.executeSql("insert into items (done, value) values (0, ?)", ["hola"]);
            tx.executeSql("select * from items", [], (_, {rows}) =>
                console.log(JSON.stringify(rows))
            );
        })
    }
    return (
        <View style={styles.container}>
            <Text>ExpoSqlLiteManager</Text>
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