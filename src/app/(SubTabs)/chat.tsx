import React from 'react';
import { StyleSheet, SafeAreaView, Animated, FlatList, Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions, ImageBackground } from "react-native";
import { router } from 'expo-router';

// Header Component
const Header: React.FC = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerText}>Chat</Text>
    <TouchableOpacity onPress={() => router.back()} style={{ padding: 10, backgroundColor: 'blue', marginRight: 15, borderRadius: 10 }}>
      <Text style={{ color: 'white', marginRight: 1 }}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default function Chat() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {/* Rest of your app goes here */}
      <View style={styles.content}>
        <ImageBackground
          source={require('../../../assets/image-1.jpg')}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          resizeMode="cover"
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.7)', width: 360 }}>
            <ScrollView style={styles.scrollViewE}>
              <Text>SecondRoute</Text>
            </ScrollView>
          </View>
        </ImageBackground>
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
  scrollViewE: {
    alignContent: "center",
    // height: 'auto',
    padding: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
