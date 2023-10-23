import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti'

export default function Balance({ entradas, saidas }) {
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Entadas</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$:</Text>
                    <Text style={styles.balance}> {entradas}</Text>
                </View>
            </View>


            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saidas</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$:</Text>
                    <Text style={styles.expenses}> {saidas}</Text>
                </View>
            </View>
        </MotiView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,
        marginTop: -28,
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 12,
        zIndex: 99,
    },
    item: {

    },
    itemTitle: {
        color: "#DADADA",
        fontSize: 20
    },
    content: {
        flexDirection: "row",
        alignItems: "center"
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }

})