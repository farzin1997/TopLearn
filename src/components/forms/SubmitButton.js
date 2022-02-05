import React from 'react';
import {useFormikContext} from 'formik';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../shared/CustomButton';

const SubmitButton = ({...otherProps}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <View style={styles.button}>
      <CustomButton {...otherProps} onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: '60%',
  },
});
