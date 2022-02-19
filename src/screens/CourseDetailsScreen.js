import React from 'react';
import {StyleSheet} from 'react-native';
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen';

const CourseDetailsScreen = ({navigation, route}) => {
  if (!route.params.course) return null;
  const {title, price, _id, imageUrl, info} = route.params.course;

  navigation.setOptions({
    headerShown: true,
    title: title,
    headerTitleStyle: {fontFamily: 'ih', color: 'white'},
    headerStyle: {backgroundColor: 'tomato'},
  });
  return (
    <Screen style={styles.container}>
      <Card
        title={title}
        price={price}
        image={imageUrl}
        teacher={'یونس قربانی'}
        time={'15:00:00'}
        courseInfo={info}
      />
    </Screen>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f8f4f4',
  },
});
