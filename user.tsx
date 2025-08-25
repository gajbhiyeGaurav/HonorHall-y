import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Dimensions, StyleSheet } from "react-native";
import SearchBar from '../../components/SearchBar';
import UserBar from '../../components/UserBar';
import { router } from 'expo-router';


export default function User() {

  const [search, setSearch] = useState('');

  return (
    <View style={styles.containerE}>
      <ImageBackground
        source={require('../../../assets/image-5.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.7)', width: 360 }}>
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Search here..."
          />
          <ScrollView style={styles.scrollViewE}>
            {/* // Inside your component render: */}
            <UserBar
              avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
              username="John Doe"
              subText="Active now"
              rightIcon={<Ionicons name="chevron-forward" size={24} color="#888" />}
              onPress={() => router.push("../(SubTabs)/chat")}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}


export const styles = StyleSheet.create({
  pageE: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollViewE: {
    alignContent: "center",
    // height: 'auto',
    padding: 10,
  },
  containerE: {
    backgroundColor: "grey",
    height: 700,
    width: 360,
  },
});