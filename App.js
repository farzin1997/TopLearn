import React from 'react';
import {I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StacksNavigator from './src/containers/StacksNavigator';

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
  return (
    <NavigationContainer>
      <StacksNavigator />
    </NavigationContainer>
  );
};

export default App;
