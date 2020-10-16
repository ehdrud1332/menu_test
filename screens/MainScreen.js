import React, {useState, useEffect} from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {Text, Block, Card, Badge} from '../components';
import {productApi, apiImage} from '../api';
import {theme} from '../constants';

const {width} = Dimensions.get('window')

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
        renderLabel={({route}) => (
            <Text style={{color: 'white', fontWeight: '400'}}>
                {route.title}
            </Text>
        )}
    />
)

const initialLayout = {width: Dimensions.get('window').width}


const MainScreen = ({navigation}) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: '모든상품'},
        {key: 'second', title: "Phone"},
        {key: 'third', title: 'Laptop'}
    ]);
    const [result, setResult] = useState({
        loading: true,
        products: [],
        productError: null
    })

    const renderScene = SceneMap({
        first: () =>
            <Block flex={true} cednter style={{backgroundColor: 'white'}}>
                <ScrollView
                    style={{paddingVertical: theme.sizes.base * 2}}
                >
                    <Block flex={false} row space="between" style={styles.categories}>
                        {result.products.map(product => (
                            <TouchableOpacity
                                key={product.id}
                                onPress={() => navigation.navigate("Detail", product.id)}
                            >
                                <Card center middle shadow style={styles.category}>
                                    <Badge
                                        margin={[0, 0, 15]}
                                        size={50}
                                        color='rgba(41, 216, 143, 0.20'
                                    >
                                        <Image
                                            style={{width: 80, height: 80}}
                                            source={{uri: `http://localhost:1337${product.image.url}`}}
                                        />
                                    </Badge>
                                    <Text medium>
                                        {product.name}
                                    </Text>
                                    <Text grey caption>
                                        $ {product.price}
                                    </Text>
                                </Card>

                            </TouchableOpacity>
                        ))}
                    </Block>
                </ScrollView>
            </Block>,
        second: Phone,
        third: Laptop
    })

    const getData = async() => {
        const [products, productsError] = await productApi.all();
        setResult({
            loading: false,
            products,
            productsError
        })
        console.log(products)
    }

    useEffect(() => {
        getData();
    }, [])

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


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3
    },
    categories: {
        flexWrap: "wrap",
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        marginBottom: 30,
        padding: 5
    }
});