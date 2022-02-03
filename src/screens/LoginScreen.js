import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit}) => (
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
            <View style={styles.button}>
              <CustomButton title={'ورود کاربر'} onPress={handleSubmit} />
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
