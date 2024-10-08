import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNavBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/Rectangle.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="home-outline" size={24} color={styles.iconColor.color} />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="search-outline" size={24} color={styles.iconColor.color} />
                    <Text style={styles.navText}>Explore</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="document-outline" size={24} color={styles.iconColor.color} />
                    <Text style={styles.navText}>Dive Log</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="people-outline" size={24} color={styles.iconColor.color} />
                    <Text style={styles.navText}>Find Buddy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="calendar-outline" size={24} color={styles.iconColor.color} />
                    <Text style={styles.navText}>Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: 'transparent',
    },
    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        color: '#4A4A4A',
        fontSize: 12,
        marginTop: 4,
    },
    iconColor: {
        color: '#4A4A4A',
    },
});

export default BottomNavBar;



