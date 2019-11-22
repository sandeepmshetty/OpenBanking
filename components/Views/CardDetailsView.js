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
import {createStackNavigator, NavigationActions, StackActions, createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from '../UtilComponents/SliderEntry';
import styles, {colors} from '../UtilComponents/index.style';
import ListOfCardsView from './ListOfCardsView';
import DrawerContainer from '../DrawerContainer';
import mainstyles from '../UtilComponents/main.style';
import FillCardDetailsView1 from './FillCardDetailsView1';
import DashboardView from './DashboardView';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 0;

class CardDetailsView extends Component {

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

    navigateToAddCardPage = () => {
        /*const fillcardAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'CardDetailsView'})]
        });

        this
            .props
            .navigation
            .dispatch(fillcardAction);*/

            this
            .props
            .navigation
            .navigate('FillCardDetailsView1');
    }

    _renderItemWithParallax({
        item,
        index
    }, parallaxProps) {
        return (
            <TouchableOpacity onPress={this.navigateToAddCardPage}>
                <SliderEntry
                    data={item}
                    even={(index + 1) % 2 === 0}
                    parallax={true}
                    parallaxProps={parallaxProps}/></TouchableOpacity>
        );
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
                <View style={{
                    marginLeft: -10
                }}><Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    layout={'default'}
                    itemWidth={itemWidth}
                    hasParallaxImages={false}
                    firstItem={0}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={false}
                    loopClonesPerSide={0}
                    autoplay={false}
                    onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}/>
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
                    <View style={cardstyles.card}>
                        {slider1ActiveSlide < (ENTRIES1.length - 1)
                            ? (
                                <View>
                                    <ImageBackground
                                        source={require('../../assets/bg_gradient.png')}
                                        style={{
                                        overflow: 'hidden',
                                        borderRadius: 5,
                                        marginBottom: 10,
                                        marginTop: 0,
                                        padding: 7,
                                        height: 40
                                    }}>

                                        <View
                                            style={{
                                            flex: 1,
                                            flexDirection: 'row'
                                        }}>
                                            <View>
                                                {defaultIcon}
                                            </View>
                                            <View
                                                style={{
                                                flex: 7
                                            }}>
                                                <Text style={cardstyles.cardText}>HSBC Advance</Text>
                                            </View>

                                            <View
                                                style={{
                                                flex: 7,
                                                marginLeft: 25
                                            }}>
                                                <Text style={cardstyles.cardText}>
                                                    6452718
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                flex: 4,
                                                marginLeft: 25
                                            }}>
                                                <Text style={cardstyles.cardText}>
                                                    510.45$
                                                </Text>
                                            </View>
                                        </View>

                                    </ImageBackground>

                                    <KeyboardAwareScrollView>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>
                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}>
                                                        {received}
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>10 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Wilko London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>10 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}>
                                                        {received}
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>12 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>

                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>

                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>12 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>

                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>13 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>14 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>15 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>16 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>11 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>16 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}></View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>10 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}>
                                                        {received}
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>10 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../assets/bg_gradient.png')}
                                                style={cardstyles.imageItem}>

                                                <View style={cardstyles.rowView}>
                                                    <View
                                                        style={{
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}>
                                                        {received}
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 7,
                                                        marginLeft: 10
                                                    }}>
                                                        <Text style={cardstyles.cardText}>10 June 2019</Text>
                                                    </View>

                                                    <View
                                                        style={{
                                                        flex: 7
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            Tesco London
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                        flex: 3
                                                    }}>
                                                        <Text style={cardstyles.cardText}>
                                                            10.45$
                                                        </Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </KeyboardAwareScrollView>
                                </View>
                            )
                            : <ImageBackground
                                source={require('../../assets/bg_gradient.png')}
                                style={{
                                height: '100%',
                                overflow: 'hidden',
                                borderRadius: 10,
                                padding: 5
                            }}>
                                <View
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text
                                        style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        alignSelf: 'stretch',
                                        fontSize:22
                                    }}>All Your Card in One</Text>
                                    <Text
                                        style={{
                                        color: '#75d4e7',
                                        textAlign: 'center',
                                        alignSelf: 'stretch',
                                        marginTop:5,
                                        fontSize:18
                                    }}
                                        onPress={() => this.navigateToAddCardPage()}>Add New Card</Text>
                                </View>
                            </ImageBackground>
}
                    </View>
                </View>
            </View>
        )
    }
}

const cardstyles = StyleSheet.create({
    card: {
        height: '51%',
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 30,
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
        cardType: 'VISA',
        cardHolderName: 'John Doe',
        cardNumber: '1234',
        bankName: 'HSBC UK',
        logo: require('../../assets/visalogo.jpg'),
        isAddCard: false
    }, {
        cardType: 'Mastercard',
        cardHolderName: 'John Smith',
        cardNumber: '1234',
        bankName: 'Lloyd UK',
        logo: require('../../assets/mastercardlogo.png'),
        isAddCard: false
    }, {
        cardType: 'Discover',
        cardHolderName: 'Veronica Doe',
        cardNumber: '4561',
        bankName: 'HDFC India',
        logo: require('../../assets/discoverlogo.jpg'),
        isAddCard: false
    }, {
        cardType: 'American Express',
        cardHolderName: 'Dany Joe',
        cardNumber: '4534',
        bankName: 'ICICI India',
        logo: require('../../assets/american_express.png'),
        isAddCard: false
    }, {
        cardType: 'VISA',
        cardHolderName: 'John Smith',
        cardNumber: '8741',
        bankName: 'LLoyds UK',
        logo: require('../../assets/visalogo.jpg'),
        isAddCard: false
    }, {
        cardType: 'Maestro',
        cardHolderName: 'John Dan',
        cardNumber: '2147',
        bankName: 'HSBC UK',
        logo: require('../../assets/maestro.png'),
        isAddCard: false
    }, {
        cardType: '',
        cardHolderName: '',
        cardNumber: '',
        bankName: '',
        logo: require('../../assets/maestro.png'),
        isAddCard: true
    }
];

const CardDetailsViewStack = createStackNavigator({

    CardDetailsView: {
        screen: CardDetailsView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Cards View", headerLeft: <View>
                <TouchableOpacity
                    onPress={() => {
                    navigation.toggleDrawer()
                }}><Icon name='menu' size={35} color='white'/></TouchableOpacity>
            </View>,
            headerStyle: {
                backgroundColor: '#131642',
                color: 'white'
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: 'white'
            }
        })
    }
});

const DrawerStack = createDrawerNavigator({
    CardDetailsView: {
        screen: CardDetailsViewStack,
        navigationOptions: {
            header: null
        }
    },
    FillCardDetailsView1: {
      screen: FillCardDetailsView1,
      navigationOptions: {
        headerTitle: "Add Card Details"
      }
    },

}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack