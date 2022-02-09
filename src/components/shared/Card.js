import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {numberWithCommas} from '../../utils/price';

const Card = ({title, price, teacher, time, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.courseImage} />
      <View style={{padding: 20}}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.courseDetails}>
          <Text style={styles.price}>
            {`قیمت دوره : ${numberWithCommas(price)} تومان`}
          </Text>
          <Text style={styles.time}>زمان دوره : {time}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.teacher}> مدرس دوره : <Text style={{color:'white'}}>{teacher}</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'limegreen',
    marginBottom: 20,
    overflow: 'hidden',
  },
  courseImage: {
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
});
