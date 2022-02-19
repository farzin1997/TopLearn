import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CoursesScreen} from '../screens';
import NewCoursesScreen from '../screens/NewCoursesScreen';
import TopCoursesScreen from '../screens/TopCoursesScreen';
import customContex from '../contexts/customContext';
import {fetchCourses} from '../api';
import {Screen} from '../components/shared';
import {ActivityIndicator} from 'react-native';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
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
    <customContex.Provider
      value={{
        courses: getCourses,
        loading,
      }}>
      <Screen>
        <TopTab.Navigator
          initialRouteName="AllCourses"
          backBehavior="none"
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontFamily: 'ih',
              fontSize: 14,
            },
            style: {backgroundColor: 'lime'},
          }}>
          <TopTab.Screen
            name="AllCourses"
            component={CoursesScreen}
            options={{tabBarLabel: 'همه دوره ها'}}
          />
          <TopTab.Screen
            name="NewCourses"
            component={NewCoursesScreen}
            options={{tabBarLabel: 'دوره های جدید'}}
          />
          <TopTab.Screen
            name="TopCourses"
            component={TopCoursesScreen}
            options={{tabBarLabel: 'دوره های محبوب'}}
          />
        </TopTab.Navigator>
        {loading ? (
          <ActivityIndicator
            color={'tomato'}
            animating={loading}
            style={{flex: 1}}
            size={'large'}
          />
        ) : null}
      </Screen>
    </customContex.Provider>
  );
};

export default TopTabNavigator;
