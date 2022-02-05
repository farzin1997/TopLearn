import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

const Screen = ({children, style, statusBar}) => {
  return (
    <View style={[styles.screen, style]}>
      {children}
      <StatusBar barStyle="light-content" backgroundColor={statusBar} />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
