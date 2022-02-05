import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({children, color = 'black', size = 14,fontFamily= 'ih'}) => {
  return (
    <Text style={[styles.text, {color}, {fontSize: size},{fontFamily}]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ih',
  },
});
