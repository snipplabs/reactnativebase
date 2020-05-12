import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Bottomtabs } from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/redux/store';
import { Dimensions, Image, View } from 'react-native';

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Bottomtabs />
      </PersistGate>
    </Provider>
  );
}
