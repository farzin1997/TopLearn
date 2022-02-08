import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Screen from '../components/shared/Screen';

const CoursesScreen = () => {
  return (
    <Screen style={styles.container}>
      <Text>صفحه ی دوره ها</Text>
    </Screen>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
