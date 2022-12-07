import React, { useCallback, useEffect, useRef, useState } from 'react';

import _ from 'lodash';

import { View, Animated, Easing } from 'react-native';

import styles from '../_styles';

const LOADING_ELE_WIDTH = 50;

function LoadingLine({ loading, style = [] }) {

  const [show, setShow] = useState(false);
  const [eleWidth, setEleWidth] = useState(0);

  let loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading && !show) {
      setShow(true);
      run();
    }
    debounceHandleLoading(loading);
  }, [loading]); // eslint-disable-line

  const debounceHandleLoading = useCallback(_.debounce(l => { // eslint-disable-line
    if (!l) {
      setShow(false);
      loadingAnim.stopAnimation();
    }
  }, 1000), []);

  const onLayout = (e) => {
    setEleWidth(e?.nativeEvent?.layout?.width);
  }

  const run = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
          easing: Easing.ease
        }),
        Animated.timing(loadingAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
          easing: Easing.ease,
          // delay: 100
        })
      ])
    ).start();
  }

  const translateXAnim = loadingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, eleWidth - LOADING_ELE_WIDTH]
  });

  const widthAnim = loadingAnim.interpolate({
    inputRange: [0, 0.5, 0.8, 1],
    outputRange: [LOADING_ELE_WIDTH, LOADING_ELE_WIDTH * 2, LOADING_ELE_WIDTH * 1.5, LOADING_ELE_WIDTH]
  });

  return (
    <View
      style={[
        styles.bg_secondary_2,
        {
          width: '100%',
          height: 5
        },
        ...style
      ]}
      onLayout={onLayout}
    >
      {!!show && (
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: widthAnim,
              borderRadius: 3,
              transform: [{ translateX: translateXAnim }]
            },
            styles.bg_green_6
          ]}
        />
      )}
    </View>
  );
}

export default LoadingLine;