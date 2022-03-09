import React, {useEffect} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Card, Screen} from '../components/shared';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {decodeToken} from '../utils/token';

const CoursesScreen = ({navigation}) => {
  const courses = useSelector(state => state.courses);

  useEffect(() => {
    const myFunc = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('decode >>>>>>>>>>');
      console.log(decodeToken(token));
      console.log('<<<<<<<<<');
    };
    myFunc();
  }, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        keyExtractor={course => course._id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CourseDetails', {course: item})
            }>
            <Card
              title={item.title}
              price={item.price}
              image={item.imageUrl}
              teacher={'یونس قربانی'}
              time={'15:00:00'}
              courseInfo={item.courseInfo}
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
