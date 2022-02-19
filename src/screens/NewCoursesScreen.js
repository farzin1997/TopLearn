import React, {useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card, Screen} from '../components/shared';
import customContex from '../contexts/customContext';

const NewCoursesScreen = ({navigation}) => {
  const context = useContext(customContex);

  return (
    <Screen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={context.courses}
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

export default NewCoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
});
