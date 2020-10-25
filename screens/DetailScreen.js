import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated,
    View,
    Dimensions,
    StatusBar,
    SafeAreaView
} from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {theme} from '../constants';
import {productApi, apiImage} from '../api';
import {Block, Button, Card, Badge, Text} from '../components';

export default ({
    route: {
        params: id
    }, navigation
}) => {

    const [results, setResults] = useState({
        loading: true,
        getDetail: {
            sourceImage: {}
        }
    })

    const getData = async() => {
        const [getDetail, getDetailError] = await productApi.detail(id)
        setResults({
            loading: false,
            getDetail: {
                ...getDetail,
                sourceImage: getDetail.sourceImage
            }
        })
    }
    useEffect(() => {
        getData();
    }, [id])



    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <Image
                style={{width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute', top: -150}}
                source={require('../assets/iPhoneSESE.png')}/>
            <View style={{backgroundColor: 'black', height: 90}}>
                <View
                    style={{
                        paddingHorizontal: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 45
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Entypo
                            name='chevron-thin-left'
                            size={25}
                            color='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            name='search1'
                            size={25}
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
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

