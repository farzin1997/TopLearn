import React, {useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card, Screen} from '../components/shared';
import {useSelector} from 'react-redux';

const TopCoursesScreen = () => {
  const courses = useSelector(state => state.courses);

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courses}
        keyExtractor={course => course._id.toString()}
        renderItem={({item}) => (
          <Card
          title={item.title}
          price={item.price}
          image={item.imageUrl}
          teacher={'یونس قربانی'}
          time={'15:00:00'}
          courseInfo={item.courseInfo}
          />
        )}
      />
    </Screen>
  );
};

export default TopCoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
});
