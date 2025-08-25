import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

// Dummy screen component
const Screen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name}</Text>
  </View>
);

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 120 }, // controls tab width
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: 'blue' },
      }}
    >
      <Tab.Screen name="Tab1" children={() => <Screen name="Tab 1" />} />
      <Tab.Screen name="Tab2" children={() => <Screen name="Tab 2" />} />
      <Tab.Screen name="Tab3" children={() => <Screen name="Tab 3" />} />
      <Tab.Screen name="Tab4" children={() => <Screen name="Tab 4" />} />
      <Tab.Screen name="Tab5" children={() => <Screen name="Tab 5" />} />
      <Tab.Screen name="Tab6" children={() => <Screen name="Tab 6" />} />
      <Tab.Screen name="Tab7" children={() => <Screen name="Tab 7" />} />
    </Tab.Navigator>
  );
}
