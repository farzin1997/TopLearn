import React from 'react';
import {StyleSheet, View, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CustomTextInput = ({icon, hide, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...otherProps} autoCorrect={false} />
      {icon && (
        <Pressable onPress={hide} style={styles.icon}>
          <Icon name={icon} color={'#6e6969'} size={20} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 20,
    flexDirection: 'row',
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    fontFamily: 'byekan',
    color: '#0c0c0c',
    textAlign: 'center',
    width: '95%',
  },
  icon: {
    alignSelf: 'center',
    padding: 4,
  },
});
