import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';

const Bai3_Lab3 = () => {
  const offset = new Animated.Value(0);

  const moveSquare = () => {
    const randomOffset = Math.random() * 200;
    Animated.timing(offset, {
      toValue: randomOffset,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    transform: [{ translateY: offset }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, animatedStyle]}>
        <TouchableOpacity onPress={moveSquare} style={styles.button}>
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'flex-end', // Đặt button ở dưới
  },
  button: {
    position: 'absolute', // Đặt button trên hình vuông
    bottom: 0,
    left: 0,
    width: 100,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Bai3_Lab3;
