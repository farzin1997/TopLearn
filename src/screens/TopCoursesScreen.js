import React, {useContext} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Card, Screen} from '../components/shared';
import customContex from '../contexts/customContext';

const TopCoursesScreen = () => {
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
            time={item.time}
            price={item.price}
            image={item.imageUrl}
            teacher={item.teacher}
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
