import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OnOffButton = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => setIsOn(prev => !prev);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isOn ? styles.on : styles.off]}
        onPress={toggleSwitch}
      >
        <Text style={styles.text}>{isOn ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnOffButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  on: {
    backgroundColor: 'green',
  },
  off: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
