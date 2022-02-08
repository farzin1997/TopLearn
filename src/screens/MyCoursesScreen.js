import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Screen from '../components/shared/Screen';

const MyCoursesScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text>صفحه ی دوره های بنده</Text>
    </Screen>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
