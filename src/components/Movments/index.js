import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti'

export default function Movments({ data }) {
    const [showValue, setShowValue] = useState(false)


    return (
        <TouchableOpacity style={styles.container} onPress={() => { setShowValue(!showValue) }}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type: 'timing',
                                duration: 500
                            }}
                            style={data.type === "expense" ? styles.expense : styles.value}>
                            {data.type === "expense" ? `R$ -${data.value}` : `R$ ${data.value}`}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <View style={styles.selekton}>

                        </View>
                    </AnimatePresence>
                )}

            </View>

        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA"
    },
    date: {
        fontSize: 12
    },
    content: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10

    },
    label: {
        fontSize: 18
    },
    value: {
        fontSize: 16,
        color: '#2ecc71'
    },
    expense: {
        fontSize: 16,
        color: '#e74c3c'
    },
    selekton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8

    }
})