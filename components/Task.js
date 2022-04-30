import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Task(props) {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#70C3FF',
        opacity: 0.7,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#70C3FF',
        borderWidth: 2,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%',
    },
});