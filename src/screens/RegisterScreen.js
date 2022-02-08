import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import * as yup from 'yup';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen';

validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('نام و نام خانودگی را وارد نکردید!')
    .min(8, 'نام نباید کمتر از 8 کاراکتر باشد!'),
  email: yup
    .string()
    .required('ایمیل خود را وارد نکردید!')
    .email('ایمیل معتبر نمی باشد.'),
  password: yup
    .string()
    .required('رمز خود را وارد نکردید!')
    .min(6, 'رمز نباید کمتر از 6 کاراکتر باشه!'),
  passwordConfirmation: yup
    .string()
    .required('تکرار رمز عبور الزامی می باشد')
    .oneOf([yup.ref('password'), null], 'رمز های عبور باید یکسان باشند'),
});

const RegisterScreen = () => {
  const [isHide, setIsHide] = useState(true);
  return (
    <Screen statusBar={'tomato'} style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <CustomForm
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={values => console.log('register:', values)}
        validationSchema={validationSchema}>
        <CustomFormField
          placeholder="نام و نام خانوادگی"
          icon={'account-circle'}
          name={'fullName'}
          placeholderTextColor="tomato"
        />

        <CustomFormField
          placeholder="ایمیل کاربری"
          autoComplete="email"
          keyboardType="email-address"
          icon={'email'}
          name={'email'}
          placeholderTextColor="tomato"
        />

        <CustomFormField
          placeholder="رمز عبور"
          icon={isHide ? 'eye' : 'eye-off'}
          name={'password'}
          hide={() => setIsHide(!isHide)}
          secureTextEntry={isHide ? true : false}
          placeholderTextColor="tomato"
        />

        <CustomFormField
          placeholder="تکرار رمز عبور"
          icon={isHide ? 'eye' : 'eye-off'}
          name={'passwordConfirmation'}
          hide={() => setIsHide(!isHide)}
          secureTextEntry={isHide ? true : false}
          placeholderTextColor="tomato"
        />

        <SubmitButton title={'ثبت نام کاربر'} />
      </CustomForm>
    </Screen>
  );
};

export default RegisterScreen;

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
});
