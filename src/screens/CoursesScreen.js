import React, {useContext, useEffect} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Card, Screen} from '../components/shared';
import customContex from '../contexts/customContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decodeToken } from '../utils/jwt';

const CoursesScreen = ({navigation}) => {
  const context = useContext(customContex);
  useEffect(() => {
    const myFunc = async () => {
        const token = await AsyncStorage.getItem("token");
        console.log(decodeToken(token));
    };
    myFunc();
}, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={context.courses}
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
