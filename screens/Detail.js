import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated,
    View,
    Text
} from 'react-native';
import {theme} from '../constants';
import {productApi, apiImage} from '../api';
import {Block, Button, Card, Badge} from '../components';

const Detail = ({
    route: {
        params: id
    }
}) => {

    const scrollX = new Animated.Value(0);


    const [result, setDetail] = useState({
        loading: true,
        detailView: {},
        detailError: null
    })

    const getData = async() => {
        const [detail, detailError] = await productApi.detail(id);
        setDetail({
            loading: false,
            detailView: detail,
            detailError
        })
        console.log(apiImage(result.detailView.image.url))

    }
    useEffect(() => {
        getData();
    }, [])



    return (
        <Block>
            <View style={styles.flex}>
                <CachedImage source={{uri: `http://localhost:1337/${result.detailView.image.url}`}}/>
            </View>
            <View style={styles.flex}>
                <View style={[styles.flex, styles.contentHeader]}>
                    <Text>{result.detailView.name}</Text>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: theme.colors.accent}}>
                            ${result.detailView.Price}{"        "}
                             남은갯수 {result.detailView.Stock}
                        </Text>
                        <Text style={[styles.description]}>
                            {/*{result.detailView.Desc.split('').slice(0, 100)}...*/}
                            <TouchableOpacity>
                                <Text style={{color: theme.colors.active}}>Read more</Text>
                            </TouchableOpacity>
                        </Text>

                    </View>

                </View>
            </View>
        </Block>
    );
};

export default Detail;

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    contentHeader: {
        // backgroundColor: 'transparent',
        padding: theme.sizes.padding,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: theme.sizes.radius,
        borderTopRightRadius: theme.sizes.radius,
        marginTop: -theme.sizes.padding / 2
    },
    description: {
        fontSize: theme.sizes.font * 1.2,
        lineHeight: theme.sizes.font * 2,
        color: theme.colors.caption
    }
})

