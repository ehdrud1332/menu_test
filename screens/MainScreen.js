import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Text, Block} from '../components';

const Total = () => (
    <Block center flex={true} style={{backgroundColor: 'white'}}>
        <Text title bold>Apple</Text>
    </Block>
)

const Phone = () => (
    <Block flex={true} style={{backgroundColor: 'white'}}/>
)

const Laptop = () => (
    <Block flex={true} style={{backgroundColor: 'white'}}/>
)

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'black'}}
        style={{backgroundColor: 'black'}}
    />
)

const initialLayout = {width: Dimensions.get('window').width}


const MainScreen = () => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: 'Total'},
        {key: 'second', title: "Phone"},
        {key: 'third', title: 'Laptop'}

    ]);

    const renderScene = SceneMap({
        first: Total,
        second: Phone,
        third: Laptop
    })

    return (
        <TabView
            renderScene={renderScene}
            onIndexChange={setIndex}
            navigationState={{index, routes}}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />
    );
};

export default MainScreen;
