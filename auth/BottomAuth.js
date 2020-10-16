import React, {useEffect, useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';


import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "MainScreen"


const BottomAuth = ({navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        })
    })

    return (
        <Tab.Navigator
            tabBarOptions={{
                //누를때=active 색갈
                activeTintColor: 'black',
                labelStyle: {fontWeight: '400', textTransform: 'uppercase'}
            }}
        >
            <Tab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="ios-home"
                            color= {focused ? "black" : "#5a5a5a"}
                            size={26}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="ios-search"
                            color= {focused ? "black" : "#5a5a5a"}
                            size={26}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name="md-person"
                            color= {focused ? "black" : "#5a5a5a"}
                            size={26}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomAuth;
