import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableHighlight} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../components/shared/Icon';
import ItemSeparator from '../components/shared/ItemSeparator';
import Screen from '../components/shared/Screen';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

const AccountScreen = ({navigation}) => {
  const user = useSelector(state => state.user);
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userId');
    navigation.dispatch(StackActions.replace('Welcome'));
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/image/logo.png')}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{user.fullname}</Text>
          <Text style={styles.subTitle}>{user.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{alignSelf: 'center', marginLeft: 20}}>
          <Icon name={'cog'} iconColor={'white'} backgroundColor="tomato" />
        </TouchableOpacity>
      </View>
      <ItemSeparator height={3} />
      <TouchableHighlight underlayColor="pink" onPress={handleLogout}>
        <View style={styles.container}>
          <Icon name="logout" backgroundColor="tomato" />
          <View style={styles.details}>
            <Text style={styles.title}>خروج از حساب کاربری</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
  },
  screen: {
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'ih',
    fontSize: 20,
    color: 'black',
  },
  subTitle: {
    color: '#6e6969',
  },
});
