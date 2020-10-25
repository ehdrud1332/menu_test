import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomAuth from "./BottomAuth";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

const StackView = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="BottomAuth" component={BottomAuth}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    </Stack.Navigator>
)

export default StackView;
