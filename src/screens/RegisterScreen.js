import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import CustomButton from '../components/CustomButton';
import ErrorMessage from '../components/ErrorMessage';
import CustomTextInput from '../components/CustomTextInput';

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
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={values => console.log('register:',values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <CustomTextInput
              icon={'account-circle'}
              placeholder="نام و نام خانوادگی"
              placeholderTextColor="royalblue"
              autoCorrect={false}
              onChangeText={handleChange('fullName')}
              onBlur={() => setFieldTouched('fullName')}
            />
            <ErrorMessage error={errors.fullName} visible={touched.fullName} />

            <CustomTextInput
              icon={'email'}
              placeholder="ایمیل کاربری"
              placeholderTextColor="royalblue"
              keyboardType="email-address"
              autoComplete="email"
              autoCorrect={false}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <CustomTextInput
                hide={() => setIsHide(!isHide)}
              icon={isHide ? 'eye' : 'eye-off'}
              placeholder="رمز عبور"
              placeholderTextColor="royalblue"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isHide ? true : false}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />

            <CustomTextInput
                hide={() => setIsHide(!isHide)}
              icon={isHide ? 'eye' : 'eye-off'}
              placeholder="تکرار رمز عبور"
              placeholderTextColor="royalblue"
              autoComplete="password"
              autoCorrect={false}
              secureTextEntry={isHide ? true : false}
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={() => setFieldTouched('passwordConfirmation')}
            />
            <ErrorMessage
              error={errors.passwordConfirmation}
              visible={touched.passwordConfirmation}
            />

            <View style={styles.button}>
              <CustomButton
                title={'ثبت نام کاربر'}
                onPress={handleSubmit}
                backgroundColor="royalblue"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
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
  button: {
    width: '60%',
  },
});
