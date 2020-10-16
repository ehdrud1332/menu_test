import React from 'react';
import {
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {Block, Text, Button, Card, Badge} from '../components';

const Detail = ({
    navigation,
    route: {
        params: id
    }
}) => {
    return (
        <Block>
            <Text>
                {id}
            </Text>
        </Block>
    );
};

export default Detail;
