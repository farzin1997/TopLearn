import React, {useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen';

const CoursesScreen = ({navigation}) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'دوره جامع NodeJs',
      price: '300000',
      time: '15:00:00',
      teacher: 'یونس قربانی',
      image: require('../assets/image/courses/NodeJs.jpg'),
    },
    {
      id: 2,
      title: 'دوره جامع ReactJs',
      price: '200000',
      time: '15:00:00',
      teacher: 'یونس قربانی',
      image: require('../assets/image/courses/ReactJs.jpg'),
    },
    {
      id: 3,
      title: 'دوره جامع ElectronJs',
      price: '200000',
      time: '15:00:00',
      teacher: 'یونس قربانی',
      image: require('../assets/image/courses/Electron.jpg'),
    },
    {
      id: 4,
      title: 'دوره جامع React Native',
      price: '200000',
      teacher: 'یونس قربانی',
      time: '15:00:00',
      image: require('../assets/image/courses/ReactNative.jpg'),
    },
  ]);
  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        keyExtractor={course => course.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CourseDetails', {course: item})
            }>
            <Card
            title={item.title}
              price={item.price}
              image={item.image}
              teacher={item.teacher}
            />
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
};

export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
});
