import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';
import ErrorMessage from '../components/ErrorMessage';
import CustomTextInput from '../components/CustomTextInput';

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
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <CustomTextInput
              icon={'email'}
              placeholder="نام و نام خانوادگی"
              keyboardType="email-address"
              autoComplete="email"
              autoCorrect={false}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <ErrorMessage error={errors.email} visible={touched} />

            <CustomTextInput
              hide={() => setIsHide(!isHide)}
              icon={isHide ? 'eye' : 'eye-off'}
              placeholder="رمز عبور"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isHide ? true : false}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />

            <ErrorMessage error={errors.password} visible={touched} />

            <View style={styles.button}>
              <CustomButton title={'ثبت کاربر'} onPress={handleSubmit} />
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
