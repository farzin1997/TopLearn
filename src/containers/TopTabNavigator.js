import React, { useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CoursesScreen} from '../screens';
import NewCoursesScreen from '../screens/NewCoursesScreen';
import TopCoursesScreen from '../screens/TopCoursesScreen';
import {useDispatch} from 'react-redux';
import {Screen} from '../components/shared';
import Toast from 'react-native-tiny-toast';
import {loadingToast} from '../utils/toasts';
import { getCourses } from '../redux/actions';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        loadingToast('در حال بارگزاری ...');
        dispatch(getCourses());
        Toast.hide();
      };
      fetchData();
    } catch (err) {
      console.log(err);
      Toast.hide();
    }
  }, []);
  return (
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
      </Screen>
  );
};

export default TopTabNavigator;
