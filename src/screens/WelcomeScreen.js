import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StackActions, useNavigationState} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  BackHandler,
} from 'react-native';
import {CustomButton, CustomText, Screen} from '../components/shared';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decodeToken} from '../utils/token';
import {customToast} from './../utils/toasts';

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
  const screenIndex = useNavigationState(state => state.index);
  useEffect(() => {
    let currentCount = 0;
    console.log(screenIndex);

    if (screenIndex <= 0) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (currentCount === 1) {
          BackHandler.exitApp();
          return true;
        }

        currentCount += 1;
        customToast('برای خروج از اپلیکیشن،مجدد دکمه برگشت را لمس کنید.');

        setTimeout(() => {
          currentCount = 0;
        }, 1000);

        return true;
      });
    }
  }, []);

  useEffect(() => {
    const checkForNet = async () => {
      const state = await NetInfo.fetch();
      if (!state.isConnected) confirmationAlert();
      else {
        const token = await AsyncStorage.getItem('token');
        const userId = JSON.parse(await AsyncStorage.getItem('userId'));

        if (token !== null && userId !== null) {
          const decodedToken = decodeToken(token);
          console.log(decodedToken);
          console.log(userId);

          if (decodedToken.user.userId === userId)
            // navigation.navigate("Home");
            navigation.dispatch(StackActions.replace('Home'));
          else {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('userId');
            navigation.navigate('Login');
          }
        }
      }
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
          {/* <CustomButton
            onPress={() => navigation.navigate('Home')}
            title={'اکانت کاربری'}
            backgroundColor={'limegreen'}
          /> */}
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
