import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Dimensions,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator, NavigationActions, StackActions} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from './UtilComponents/WelcomeScreenSlider';
import styles, {colors} from './UtilComponents/index.style';
import ListOfCardsView from './Views/ListOfCardsView';
import DrawerContainer from './DrawerContainer';
import mainstyles from './UtilComponents/main.style';
import Dashboard from './Dashboard';
import LoginScreen from './LoginScreen'; 
import RegisterPage from './RegisterPage';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 0;

class WelcomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            entries: [
                {
                    bankName: "HSBC UK",
                    cardType: "Debit",
                    cardNo: "6402",
                    cardNetwrok: "Visa",
                    transactionData: [
                        {
                            date: "10/05/2019",
                            clientName: "Tesco, NY, USA",
                            transacionAmount: "100",
                            currency: "USD",
                            currencySymbol: "$"
                        }, {
                            date: "10/05/2019",
                            clientName: "Sainsbery, NY, USA",
                            transacionAmount: "100",
                            currency: "USD",
                            currencySymbol: "$"
                        }, {
                            date: "10/05/2019",
                            clientName: "Wilko, NY, USA",
                            transacionAmount: "100",
                            currency: "USD",
                            currencySymbol: "$"
                        }
                    ]
                }
            ],
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    wp(percentage) {
        const value = (percentage * viewportWidth) / 100;
        return Math.round(value);
    }

    navigateToLoginPage = () => {
        this
            .props
            .navigation
            .navigate('LoginScreen');

    }

    _renderItemWithParallax({
        item,
        index
    }, parallaxProps) {
        return (<SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}/>);
    }

    render() {

        const slideWidth = this.wp(90);
        const itemHorizontalMargin = this.wp(2);

        const sliderWidth = viewportWidth;
        const itemWidth = slideWidth + itemHorizontalMargin * 2;

        const {slider1ActiveSlide} = this.state;

        const received = <FaIcons
            name="arrow-right"
            size={15}
            style={{
            marginTop: 5
        }}
            style={{
            position: 'absolute'
        }}
            color="white"/>;
        const defaultIcon = <FaIcons
            name="star"
            style={{
            marginTop: 5
        }}
            size={18}
            color="white"/>;

        return (
            <View style={mainstyles.main}>
                <View
                    style={{
                    marginLeft: -10,
                    marginTop: 10
                }}><Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    layout={'default'}
                    itemWidth={itemWidth}
                    hasParallaxImages={false}
                    firstItem={ENTRIES1.length}
                    initialScrollIndex={ENTRIES1.length}
                    useScrollView={true}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0}
                    horizontal={true}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loopClonesPerSide={ENTRIES1.length}
                    autoplay={false}
                    onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}s/>
                    <Pagination
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={slider1ActiveSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={colors.gray}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tappableDots={!!this._slider1Ref}/>
                </View>
                <View
                    style={{
                    marginTop: 10,
                    marginRight: 10,
                    marginLeft: 10
                }}>
                    <Button
                        style={{
                        container: {
                            height: 45
                        }
                    }}
                        raised
                        primary
                        onPress={() => this.navigateToLoginPage()}
                        text="Continue"/>
                </View>
                <View>
                    <Text
                        style={{
                        marginTop: 10,
                        color: 'white',
                        textAlign: 'center',
                        alignSelf: 'stretch'
                    }}
                        onPress={() => this.navigateToLoginPage()}>I already have an account</Text>
                </View>
            </View>
        )
    }
}

const cardstyles = StyleSheet.create({
    card: {
        height: '55%',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent'
    },
    cardTitle: {
        fontSize: 18,
        color: 'white'
    },

    cardText: {
        fontSize: 15,
        color: 'white',
        marginTop: 5,
        marginLeft: 10
    },

    cardDefaultText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10
    },

    cardImage: {
        height: 65,
        width: 100
    },
    cardItem: {
        backgroundColor: '#DF6263',
        borderRadius: 5,
        padding: 0,
        marginBottom: 5
    },
    imageItem: {
        overflow: 'hidden',
        borderRadius: 5,
        margin: 0,
        height: 40,
        marginBottom: 10,
        paddingTop: 5
    },
    rowView: {
        flex: 1,
        flexDirection: 'row'
    }
});

const ENTRIES1 = [
    {
        slideText: 'Welcome to the future of money',
        slideSubText: 'OB combines all your cards info one smart card and smart app.',
        logo: require('../assets/Gob_slide.png')
    }, {
        slideText: 'All your cards in one',
        slideSubText: 'Upload all your Mastercard & Visa cards to the Curve app.',
        logo: require('../assets/Gob_slide_1.png')
    }, {
        slideText: 'Instant notifications',
        slideSubText: 'Use only one card with real-time notification from all your cards.',
        logo: require('../assets/Gob_slide_2.png')
    }, {
        slideText: 'Spend Abroad With Zero Fees',
        slideSubText: 'Spend with Curve anywhere in the world, for free. You wont be charged any additi' +
                'onal fees. Terms & conditions apply',
        logo: require('../assets/Gob_slide_3.png')
    }
];

export default WelcomeScreenStack = createStackNavigator({
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            header: null
        }
    },

    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    RegisterPage: {
        screen: RegisterPage,
        navigationOptions: {
            headerTitle: "Registration"
        }
    }
});
