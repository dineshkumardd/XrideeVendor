import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const FloatingLabelInput = ({label, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, {top: isFocused || props.value ? 0 : 18}]}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(5),
    width: '20%',
    justifyContent: 'flex-start',
  },
  label: {
    position: 'absolute',
    left: 0,
    fontSize: 9,
    color: '#aaa',
  },
  input: {
    paddingTop: 6,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    fontSize: 14,
  },
});

export default FloatingLabelInput;
