import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {numberWithCommas} from '../../utils/price';
import CustomText from './CustomText';

const Card = ({title, price, teacher, time, image, courseInfo = null}) => {
  return (
    <View style={styles.card}>
      <Image
        resizeMode="center"
        source={{uri: `https://rnapi.ghorbany.dev/${image}`}}
        style={styles.courseImage}
      />
      <View style={{padding: 20}}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.courseDetails}>
          <Text style={styles.price}>
            قیمت دوره :{' '}
            {price === 0 ? 'رایگان' : ` ${numberWithCommas(price)} تومان`}
          </Text>
          <Text style={styles.time}>زمان دوره : {time}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.teacher}>
            مدرس دوره : <Text style={{color: 'white'}}>{teacher}</Text>
          </Text>
        </View>
      </View>
      {courseInfo ? (
        <View style={{flex: 1}}>
          <CustomText fontFamily="ih" size={16}>
            توضیحات دوره :
          </CustomText>
          <ScrollView>
            <CustomText
              fontFamily="ih"
              size={17}
              color="white"
              styles={styles.courseInformation}>
              {courseInfo}
            </CustomText>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: 'limegreen',
    marginBottom: 20,
    overflow: 'hidden',
    padding: 10,
  },
  courseImage: {
    borderRadius: 35,
    width: '100%',
    height: 300,
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userContainer: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 7,
    fontFamily: 'byekan',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  time: {
    fontFamily: 'byekan',
    color: 'black',
  },
  price: {
    fontFamily: 'byekan',
    color: 'black',
  },
  teacher: {
    fontFamily: 'ih',
    fontSize: 15,
    alignSelf: 'center',
    color: 'black',
  },
  courseInformation: {
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 25,
  },
});
