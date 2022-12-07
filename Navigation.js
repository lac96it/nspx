import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import { View } from 'react-native';
import StackScreens from './src/pages/_StackScreens';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flexGrow: 1 }}>
                    <NavigationContainer onReady={() => SplashScreen.hide()}>
                        <Stack.Navigator
                            initialRouteName={"Login"}
                        >
                            {Object.entries(StackScreens).map(([name, screen]) => (
                                <Stack.Screen
                                    key={name}
                                    name={name.replace("Screen", '')}
                                    component={screen}
                                    options={() => ({
                                        headerShown: false,
                                    })}
                                />
                            ))}
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </View>
        </>
    );
}

export default Navigation;