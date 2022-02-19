import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Card from '../components/shared/Card';
import Screen from '../components/shared/Screen';
import { fetchCourses } from "./../api";

const CoursesScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [getCourses, setCourses] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
        const courses = await fetchCourses();
        setCourses(courses);
        setLoading(false);
    };
    fetchData();
}, []);

  return (
    <Screen style={styles.container}>
      {loading ? (
        <ActivityIndicator color={'tomato'} animating={loading} />
      ) : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={getCourses}
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
