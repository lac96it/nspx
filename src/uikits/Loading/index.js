import React from 'react';

import colors from '../../configs/colors';

import { View, ActivityIndicator } from 'react-native';
import LoadingLine from './LoadingLine';

import styles from '../_styles';

function Loading({ type, ...props }) {

  if (type === 'line') return <LoadingLine {...props} />

  if (type === 'screen') return (
    <View style={[
      styles.flex_1,
      styles.justify_content_center,
      styles.align_items_center,
      {
        backgroundColor: 'rgba(255,255,255,0.7)',
      }
    ]}>
      <View style={[
        {
          width: 300,
          height: 300,
          borderRadius: 40
        },
      ]} />
    </View>
  )

  return (
    <ActivityIndicator color={colors.primary} {...props} />
  );
}

export default Loading;