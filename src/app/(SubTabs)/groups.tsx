import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

// Header Component
const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerText}>Groups</Text>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default function Groups() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {/* Rest of your app goes here */}
      <View style={styles.content}>
        <Text>Welcome to your Expo app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
