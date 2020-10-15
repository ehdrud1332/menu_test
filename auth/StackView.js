import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomAuth from "./BottomAuth";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

const StackView = () => (
    <Stack.Navigator>
        <Stack.Screen name="BottomAuth" component={BottomAuth}/>
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
)

export default StackView;
