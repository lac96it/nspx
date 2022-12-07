import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import CustomStatusBar from '../CustomStatusBar';
import Loading from '../Loading';

import styles from '../_styles';

function Header({
    withStatusBar = true,
    style = [styles.bg_white],

    // LEFT
    left_icon = {
        size: 40,
        name: 'chevron-left',
        style: [],
    },
    left_options = {
        wrapper_style: [],
        onPress: null
    },

    // CENTER
    title = null,
    title_options = {
        text_style: [],
        wrapper_style: []
    },

    // RIGHTS
    rights = [],

    // LOADING
    loading = false
}) {

    const navigation = useNavigation();

    const onLeftPress = () => {
        if (left_options.onPress) left_options.onPress();
        else navigation.goBack();
    }

    return (
        <>
            {withStatusBar && (
                <CustomStatusBar style={[...style]} />
            )}
            <View style={[
                styles.flex_row,
                ...style
            ]}>
                {!!left_icon && (
                    <TouchableOpacity onPress={onLeftPress}>
                        <View style={[
                            {
                                width: 50,
                                height: 50
                            },
                            styles.justify_content_center,
                            ...(left_options.wrapper_style || [])
                        ]}>
                            <Icon name={left_icon.name} size={left_icon.size} style={[styles.text_secondary_6, ...left_icon.style]} />
                        </View>
                    </TouchableOpacity>
                )}

                <View style={[
                    styles.flex_grow_1,
                    styles.flex_shrink_1
                ]}>
                    {!!title && (
                        <View style={[
                            styles.justify_content_center,
                            styles.flex_grow_1,
                            styles.flex_shrink_1,
                            ...(title_options.wrapper_style || [])
                        ]}>
                            {typeof title === 'string' ? (
                                <Text style={[
                                    styles.text_primary,
                                    styles.text_uppercase,
                                    {
                                        fontSize: 17
                                    },
                                    ...(title_options.text_style || [])
                                ]} numberOfLines={1}>{title}</Text>
                            ) : title}
                        </View>
                    )}
                </View>

                {rights.length ? rights.map((d, idx) => React.cloneElement(d, { ...d.props, key: `right-child-${idx}` })) : (
                    <View style={[
                        {
                            width: 50
                        }
                    ]} />
                )}
            </View>

            <Loading type="line" loading={loading} style={[styles.bg_white]} />
        </>
    );
}

export default Header;