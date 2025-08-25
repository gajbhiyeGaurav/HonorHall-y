import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

type TabBarIconProps = {
  name: React.ComponentProps<typeof Feather>['name'];
  color?: string;
  size?: number;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
  activeBgColor?: string;
  inactiveBgColor?: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = React.memo(
  ({ name, color = '#777', size = 24, focused = false, style, activeBgColor = '#007AFF', inactiveBgColor = 'transparent' }) => {
    const iconColor = focused ? '#fff' : color; // Highlight when focused
    const containerStyle = [
    styles.iconContainer,
    {
      backgroundColor: focused ? activeBgColor : inactiveBgColor,
    },
    style,
  ];

    return (
      <View style={[styles.container, style, containerStyle]}>
        <Feather name={name} size={size} color={iconColor} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
   iconContainer: {
    borderRadius: 20,       // Circular background
    // margin: 8,             // Space around icon
    height: 38,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBarIcon;
