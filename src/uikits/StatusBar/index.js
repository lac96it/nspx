import React from 'react';

import { View, StatusBar as RNStatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StatusBar({ barStyle = "dark-content", style = [] }) {

  const insets = useSafeAreaInsets();

  return (
    <View style={[{ height: insets.top }, ...style]}>
      <RNStatusBar
        animated
        backgroundColor={'#fff'} // for android
        barStyle={barStyle}
      />
    </View>
  )
}