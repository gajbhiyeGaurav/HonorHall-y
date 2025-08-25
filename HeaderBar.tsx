import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or MaterialIcons, Feather, etc.

type HeaderBarProps = {
  title: string;
  leftIcon?: string;
  color?: string;
  onLeftPress?: () => void;
  rightIcons?: { name: string; onPress: () => void }[];
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  leftIcon,
  color,
  onLeftPress,
  rightIcons = [],
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left Icon */}
      <View style={styles.left}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPress}>
            <Ionicons name={leftIcon as any} size={35} color={color || "black"} />
          </TouchableOpacity>
        )}
      </View>

      {/* Title */}
      <View style={styles.middle}>
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right Icons */}
      <View style={styles.right}>
        {rightIcons.map((icon, index) => (
          <TouchableOpacity key={index} onPress={icon.onPress} style={styles.iconButton}>
            <Ionicons name={icon.name as any} size={30} color="black" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    width: 335,
    paddingHorizontal: 9,
    backgroundColor: '#fff',
  },
  left: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeaderBar;
