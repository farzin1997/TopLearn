import React, {useState} from 'react';
import {StyleSheet, Image, Alert} from 'react-native';
import * as yup from 'yup';
import {CustomForm, CustomFormField, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen';
import {registerUser} from '../api/users';
import {CustomLoading} from '../components/shared';
validationSchema = yup.object().shape({
  fullname: yup
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
const confirmationAlert = () => {
  return Alert.alert(
    'دوست من',
    `شما قبلا این ایمیل رو ثبت کردید!`,
    [
      {
        text: 'باشه',
      },
    ],
    {cancelable: false},
  );
};
const RegisterScreen = ({navigation}) => {
  const [isHide, setIsHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleUserRegistration = async user => {
    try {
      const status = await registerUser(user);
      if (status === 201) {
        //navigation
        navigation.navigate('Login');
        setLoading(false);
      } else if (status !== 201) {
        confirmationAlert();
        setLoading(false);
      } else {
        // show err
        console.log('Server error');
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Screen statusBar={'tomato'} style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <CustomForm
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={user => {
          console.log('register:', user);
          setLoading(true);
          handleUserRegistration(user);
        }}
        validationSchema={validationSchema}>
        <CustomFormField
          placeholder="نام و نام خانوادگی"
          icon={'account-circle'}
          name={'fullname'}
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
      <CustomLoading loading={loading} />
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
