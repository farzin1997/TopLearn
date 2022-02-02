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

const LoginScreen = () => {
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
        />
        <Icon name={'email'} size={25} color={'royalblue'} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="رمز عبور"
          autoComplete="password"
          autoCorrect={false}
          style={[styles.textInput,{borderColor:click?'red':'green'}]}
          secureTextEntry={click ? true : false}
        />
        <Pressable onPress={() => setClick(!click)}>
          <Icon name={'lock'} size={25} color={'royalblue'} />
        </Pressable>
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
    width: 200,
    height: 60,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 9,
    color: 'royalblue',
  },
});
