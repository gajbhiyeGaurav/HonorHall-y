import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Dimensions, StyleSheet } from "react-native";


const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={styles.scrollViewE}>
      <Text>FirstRoute</Text>
    </ScrollView>
  </View>
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={styles.scrollViewE}>
      <Text>SecondRoute</Text>
    </ScrollView>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={styles.scrollViewE}>
      <Text>ThirdRoute</Text>
    </ScrollView>
  </View>
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={styles.scrollViewE}>
      <Text>FourthRoute</Text>
    </ScrollView>
  </View>
);

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={styles.scrollViewE}>
      <Text>FifthRoute</Text>
    </ScrollView>
  </View>
);

export default function Explore() {

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Accounts' },
    { key: 'third', title: 'Posts' },
    { key: 'fourth', title: 'Polls' },
    { key: 'fifth', title: 'Groups' },
  ]);
  const Page = ({ label }: { label: string }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{label}</Text>
    </View>
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  // Opacity interpolates from 1 to 0 as you scroll down 100px
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

  // const initialLayout = { width: Dimensions.get('window').width };

  // Example: you can pass scrollY to your scenes and attach it to a ScrollView
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled // Make TabBar scrollable for >3 tabs
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'gray' }}
      labelStyle={{ color: 'black' }}
    />
  );

  return (
    <View style={styles.containerE}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 400 }}
        renderTabBar={renderTabBar}
      />
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
  },
  containerE: {
    backgroundColor: "grey",
    height: 700,
    width: 360,
  },
});