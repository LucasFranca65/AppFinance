import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
    return (

        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="filetext1" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>Extrato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="qrcode" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>PIX</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="areachart" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>Investimentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>Cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>Pagamentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color={"#000"} />
                </View>
                <Text style={styles.bootonLabel}>Conta</Text>
            </TouchableOpacity>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        paddingStart: 14,
        paddingEnd: 14,
        marginBottom: 14,
        marginTop: 18,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },
    bootonLabel: {
        marginTop: 4,
        textAlign: 'center'
    }
})