import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const CustomLoading = ({loading}) => {
  return (
    <View>
      {loading ? (
        <ActivityIndicator color={'tomato'} animating={loading} />
      ) : null}
    </View>
  );
};

export default CustomLoading;
