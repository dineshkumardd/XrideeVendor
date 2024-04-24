import {View, Text, Animated, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const defaultStyles = {
  bgGradientColors: ['#ffffff', '#ffffff'],
  headGradientColors: ['#003177', '#003177'],
};

const activeStyles = {
  bgGradientColors: ['#ffffff', '#ffffff'],
  headGradientColors: ['#003177', '#003177'],
};
const CustomSwitch = props => {
  const {value, onValueChange} = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));
  const currentStyles = value ? activeStyles : defaultStyles;

  useEffect(() => {
    // Update the animated value when the value prop changes
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 300, // Adjust the animation duration
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 10], // Adjust the distance of the switch head
  });

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);
  };

  return (
    <Pressable onPress={toggleSwitch} style={styles.pressable}>
      <LinearGradient
        colors={currentStyles.bgGradientColors}
        style={styles.backgroundGradient}
        start={{
          x: 0,
          y: 0.5,
        }}>
        <View style={styles.innerContainer}>
          <Animated.View
            style={{
              transform: [{translateX}],
            }}>
            <LinearGradient
              colors={currentStyles.headGradientColors}
              style={styles.headGradient}
            />
          </Animated.View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default CustomSwitch;
