import React from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/image/bg1.jpg')}
      style={styles.background}
      blurRadius={3}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/logo.png')}
          style={styles.logo}
        />
        <CustomText color="tomato" size={24}>
          خودآموزی ، کسب تجربه ، ورود به بازار کار
        </CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          title={'ورود'}
          backgroundColor={'royalblue'}
        />
        <CustomButton
          onPress={() => navigation.navigate('Register')}
          title={'ثبت نام'}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    top: 30,
    position: 'absolute',
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 190,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
});
