import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Alert} from 'react-native';
import Swipable from 'react-native-gesture-handler/Swipeable';
import Screen from '../components/shared/Screen';
import CustomText from '../components/shared/CustomText';
import ItemSeparator from '../components/shared/ItemSeparator';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const MyCoursesScreen = () => {
  const [getMyCourses, setMyCourses] = useState([
    {id: 1, title: 'دوره جامع NodeJs', master: 'یونس قربانی'},
    {id: 2, title: 'دوره جامع React Native', master: 'یونس قربانی'},
    {id: 3, title: 'دوره جامع ReactJs', master: 'یونس قربانی'},
    {id: 4, title: 'دوره جامع ElectronJs', master: 'یونس قربانی'},
    {id: 5, title: 'دوره جامع جاوااسکریپت', master: 'یونس قربانی'},
  ]);
  const confirmationAlert = (course, onPress) => {
    return Alert.alert(
      course.title,
      `مطمئنی می خوای  ${course.title} رو از لیست دوره هات پاک کنی`,
      [
        {
          text: 'انصراف',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'آره ، پاک کن',
          onPress: onPress,
        },
      ],
      {cancelable: false},
    );
  };
  const deleteAction = (course, onPress) => {
    return (
      <TouchableOpacity
        onPress={() => confirmationAlert(course, onPress)}
        style={styles.deleteAction}>
        <Icon name="trash-can" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  const handleDelete = course => {
    setMyCourses(getMyCourses.filter(c => c.id !== course.id));
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.title}>
        <CustomText fontFamily="byekan" color="white" size={24}>
          لیست دوره های من
        </CustomText>
      </View>
      <ItemSeparator height={5} />
      <View style={{width: '100%'}}>
        <FlatList
          data={getMyCourses}
          keyExtractor={c => c.id.toString()}
          renderItem={({item}) => (
            <View style={{marginVertical: 7}}>
              <Swipable
                renderRightActions={() =>
                  deleteAction(item, () => handleDelete(item))
                }>
                <View style={styles.containers}>
                  <View style={styles.details}>
                    <CustomText size={18}>{item.title}</CustomText>
                    <CustomText size={13}>مدرس دوره : {item.master}</CustomText>
                  </View>
                </View>
              </Swipable>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    backgroundColor: 'tomato',
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  titles: {
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 14,
    width: '100%',
    padding: 10,
    textAlign: 'center',
  },
  containers: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    padding: 15,
  },
  details: {
    marginLeft: 10,
    backgroundColor: 'white',
    borderRadius: 14,
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  deleteAction: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'tomato',
  },
});
