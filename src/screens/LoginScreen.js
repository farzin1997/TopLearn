import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Toast from 'react-native-tiny-toast';
import * as yup from 'yup';
import {loginUser} from '../api/users';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen';
import {loadingToast, successToast} from '../utils/toasts';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('ایمیل خود را وارد نکردید!')
    .email('ایمیل معتبر نمی باشد.'),
  password: yup
    .string()
    .required('رمز خود را وارد نکردید!')
    .min(6, 'رمز نباید کمتر از 6 کاراکتر باشه!'),
});

const LoginScreen = ({navigation, route}) => {
  useEffect(() => {
    if (route.params.successRegister) successToast('ثبت نام موفقیت آمیز بود');
  }, []);

  const handleUserLogin = async user => {
    try {
      loadingToast('درحال برقراری ارتباط ...');
      const status = await loginUser(user);
      if (status === 200) {
        Toast.hide();
        successToast('ورود موفقیت آمیز بود.');
      } else {
        Toast.hide();
        costomToast('ایمیل کاربری یا رمز عبور صحیح نمیباشد!');
      }
      navigation.navigate('Home', user);
    } catch (err) {
      Toast.hide();
      console.log(err);
    }
  };
  const [isHide, setIsHide] = useState(true);
  return (
    <Screen statusBar={'royalblue'} style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <CustomForm
        initialValues={{email: '', password: ''}}
        // onSubmit={() => navigation.navigate('Home')}
        onSubmit={user => {
          handleUserLogin(user);
        }}
        validationSchema={validationSchema}>
        <CustomFormField
          name={'email'}
          icon={'email'}
          placeholder="ایمیل کاربری"
          placeholderTextColor="royalblue"
          keyboardType="email-address"
          autoComplete="email"
        />

        <CustomFormField
          name={'password'}
          hide={() => setIsHide(!isHide)}
          icon={isHide ? 'eye' : 'eye-off'}
          placeholder="رمز عبور"
          placeholderTextColor="royalblue"
          autoComplete="password"
          secureTextEntry={isHide ? true : false}
        />

        <SubmitButton title={'ورود کاربر'} backgroundColor={'royalblue'} />
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
