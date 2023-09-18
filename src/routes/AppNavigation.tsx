import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestScreen } from '../constants/ScreenNames';
import Test from '../containers/Test'
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name={TestScreen}
                    component={Test}
                    options={{ headerShown: false }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation