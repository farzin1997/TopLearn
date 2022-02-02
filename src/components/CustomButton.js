import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CustomText from './CustomText';

const CustomButton = ({
  title,
  onPress,
  backgroundColor = 'tomato',
  size = 18,
  color = 'white',
  fontFamily = 'ih',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}>
      <CustomText color={color} size={size} fontFamily={fontFamily}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 5,
  },
});
