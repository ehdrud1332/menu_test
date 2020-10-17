import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import {productApi} from '../api';
import {Block, Text, Button, Card, Badge} from '../components';

const Detail = ({
    route: {
        params: id
    }
}) => {

    const [result, setDetail] = useState({
        loading: true,
        datail: {},
        detailError: null
    })

    const getData = async() => {
        const [detail, detailError] = await productApi.detail(id);
        setDetail({
            loading: false,
            detail,
            detailError
        })
        console.log(detail)

    }
    useEffect(() => {
        getData();
    }, [])



    return (
        <Block>
            <Text>
                {result.detail.name}
            </Text>
            <Text>

            </Text>
        </Block>
    );
};

export default Detail;
