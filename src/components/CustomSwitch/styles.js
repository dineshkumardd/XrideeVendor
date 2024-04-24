import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  pressable: {
    width: 25,
    height: 13,
    borderRadius: 16,
  },
  backgroundGradient: {
    borderRadius: horizontalScale(16),
    flex: 1,
    borderColor: '#FEB200',
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    position: 'relative',
  },
  headGradient: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
});

export default styles;
