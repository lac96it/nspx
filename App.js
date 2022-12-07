import React, { useEffect } from 'react';
import Navigation from './Navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux';

/** START Setup font */
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EvilIcons from 'react-native-vector-icons/EvilIcons';

AntIcon.loadFont();
FontAwesomeIcon.loadFont();
EvilIcons.loadFont();
/** END Setup font */

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;