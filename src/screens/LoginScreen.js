import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import * as yup from 'yup';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen';

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
  const [isHide, setIsHide] = useState(true);
  return (
    <Screen statusBar={'tomato'} style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <CustomForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log('login:', values)}
        validationSchema={validationSchema}>
        <CustomFormField
          name={'email'}
          icon={'email'}
          placeholder="ایمیل کاربری"
          placeholderTextColor="tomato"
          keyboardType="email-address"
          autoComplete="email"
        />

        <CustomFormField
          name={'password'}
          hide={() => setIsHide(!isHide)}
          icon={isHide ? 'eye' : 'eye-off'}
          placeholder="رمز عبور"
          placeholderTextColor="tomato"
          autoComplete="password"
          secureTextEntry={isHide ? true : false}
        />

        <SubmitButton title={'ورود کاربر'} />
      </CustomForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
});
