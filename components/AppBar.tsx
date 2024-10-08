import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppBar = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftContainer}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </View>
                    <Text style={styles.title}>Search Buddy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightContainer}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 0,
        backgroundColor: '#041744',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 16,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
        marginLeft: 8,
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 8,
        borderColor: 'white',
        borderWidth: 1,
    },
});

export default AppBar;



