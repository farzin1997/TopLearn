import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  BackHandler,
} from 'react-native';
import {CustomButton, CustomText, Screen} from '../components/shared';

const confirmationAlert = () => {
  return Alert.alert(
    'ارتباط با سرور',
    `برای استفاده از اپلیکیشن باید به اینترنت متصل باشید`,
    [
      {
        text: 'باشه',
        onPress: BackHandler.exitApp,
      },
    ],
    {cancelable: false},
  );
};

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    const checkForNet = async () => {
      const state = await NetInfo.fetch();
      console.log('connectionType : ', state.type);
      console.log('Is connected ? ', state.isConnected);
      if (!state.isConnected) confirmationAlert();
    };
    checkForNet();
  }, []);

  return (
    <Screen statusBar={'limegreen'}>
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
          <CustomButton
            onPress={() => navigation.navigate('Home')}
            title={'اکانت کاربری'}
            backgroundColor={'limegreen'}
          />
        </View>
      </ImageBackground>
    </Screen>
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
