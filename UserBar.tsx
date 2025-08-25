import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface UserBarProps {
  avatarUrl: string;
  username: string;
  subText?: string;
  onPress?: () => void;
  rightIcon?: React.ReactNode;
}

const UserBar: React.FC<UserBarProps> = ({
  avatarUrl,
  username,
  subText,
  onPress,
  rightIcon,
}) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={onPress ? 0.7 : 1}
    onPress={onPress}
  >
    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.username}>{username}</Text>
      {subText ? <Text style={styles.subText}>{subText}</Text> : null}
    </View>
    {rightIcon ? <View style={styles.iconContainer}>{rightIcon}</View> : null}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 6,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',
  },
  textContainer: {
    flex: 1,
    marginLeft: 14,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  iconContainer: {
    marginLeft: 10,
  },
});

export default UserBar;