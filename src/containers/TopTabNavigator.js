import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CoursesScreen} from '../screens';
import NewCoursesScreen from '../screens/NewCoursesScreen';
import TopCoursesScreen from '../screens/TopCoursesScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
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
  );
};

export default TopTabNavigator;
