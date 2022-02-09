import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({children, color = 'black', size = 14,fontFamily= 'ih',otherStyles}) => {
  return (
    <Text style={[styles.text, {color}, {fontSize: size},{fontFamily},otherStyles]}>
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
