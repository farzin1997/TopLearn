import React from 'react';
import {I18nManager} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StacksNavigator from './src/containers/StacksNavigator';
import {store} from './src/redux/store';

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StacksNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
