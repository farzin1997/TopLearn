import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Screen from '../components/shared/Screen';

const AccountScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text>صفحه اکانت کاربری</Text>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
