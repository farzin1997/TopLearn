import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [click, setClick] = useState(true);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
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
          onChangeText={text => setEmail(text)}
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
          secureTextEntry={click ? true : false}
          onChangeText={text => setPassword(text)}
        />
        <Pressable
          style={styles.iconContainer}
          onPress={() => setClick(!click)}>
          <Icon name={'lock'} size={25} color={'royalblue'} />
        </Pressable>
      </View>
      <View style={styles.button}>
        <CustomButton
          title={'ورود کاربر'}
          onPress={() => console.log('email:', email, 'password:', password)}
        />
      </View>
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
