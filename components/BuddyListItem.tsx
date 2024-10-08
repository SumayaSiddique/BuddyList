import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BuddyListItemProps {
    name: string;
    location: string;
    imageSource: any;
}

const BuddyListItem: React.FC<BuddyListItemProps> = ({ name, location, imageSource }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-sharp" size={16} color="#888" />
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "white",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 12,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#233048",
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    location: {
        marginLeft: 4,
        color: "#888",
        fontSize: 14,
    },
});

export default BuddyListItem;

