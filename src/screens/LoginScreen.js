import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import ErrorMessage from '../components/ErrorMessage';

validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('ایمیل خود را وارد نکردید!')
    .email('ایمیل معتبر نمی باشد.'),
  password: yup
    .string()
    .required('رمز خود را وارد نکردید!')
    .min(6, 'رمز نباید کمتر از 6 کاراکتر باشه!'),
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors}) => (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="ایمیل کاربری"
                keyboardType="email-address"
                autoComplete="email"
                autoCorrect={false}
                style={styles.textInput}
                onChangeText={handleChange('email')}
              />
              <View style={styles.iconContainer}>
                <Icon name={'email'} size={25} color={'royalblue'} />
              </View>
            </View>
            <ErrorMessage error={errors.email} />
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder="رمز عبور"
                autoComplete="password"
                autoCorrect={false}
                style={styles.textInput}
                secureTextEntry
                onChangeText={handleChange('password')}
              />
              <View style={styles.iconContainer}>
                <Icon name={'lock'} size={25} color={'royalblue'} />
              </View>
            </View>
            <ErrorMessage error={errors.password} />
            <View style={styles.button}>
              <CustomButton
                backgroundColor={
                  errors.email || errors.password ? 'lightgray' : 'royalblue'
                }
                title={'ورود کاربر'}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
  textInput: {
    width: '80%',
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    color: 'royalblue',
    textAlign: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  button: {
    width: '60%',
  },
});
