import React from "react";
import { View, StatusBar, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AppBar from '../components/AppBar';
import BuddyListItem from '../components/BuddyListItem';

const users = [
  {
    id: 1,
    name: "John Doe",
    location: "Dhaka, Bangladesh",
    imageSource: require('../assets/images/Man.png'),
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Chittagong, Bangladesh",
    imageSource: require('../assets/images/Man.png'),
  },
  {
    id: 3,
    name: "Robert Williams",
    location: "Sylhet, Bangladesh",
    imageSource: require('../assets/images/Man.png'),
  },
];

export default function Index() {
  return (
    <View style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#041744" />
      <AppBar />
      <View style={styles.searchSection}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.filterIconWrapper}>
          <Ionicons name="filter" size={24} color="#233048" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.buddyListContainer}>
        {users.map(user => (
          <BuddyListItem
            key={user.id}
            name={user.name}
            location={user.location}
            imageSource={user.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#BEE4F4',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  searchWrapper: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 8,
    borderColor: '#041744',
    borderWidth: 1,
  },
  filterIconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#041744',
    borderWidth: 1,
    marginLeft: 10,
  },
  input: {
    height: 40,
    color: '#333',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  buddyListContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
});






