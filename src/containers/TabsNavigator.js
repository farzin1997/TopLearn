import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {CoursesScreen, AccountScreen, MyCoursesScreen} from '../screens';
import TopTabNavigator from './TopTabNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Courses"
      activeColor="white"
      // inactiveColor="black"
      barStyle={{backgroundColor: 'limegreen'}}>
      <Tab.Screen
        name="MyCourses"
        component={MyCoursesScreen}
        options={{
          tabBarLabel: 'دوره های من',
          tabBarColor: '#3e2465',
          tabBarBadge: 3,
          tabBarIcon: ({color}) => (
            <Icon name="message-video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={TopTabNavigator}
        options={{
          tabBarLabel: 'دوره ها',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <Icon name="school" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'اکانت من',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
