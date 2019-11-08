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
    TouchableOpacity
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from '../UtilComponents/SliderEntry';
import styles, {colors} from '../UtilComponents/index.style';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 1;

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
            style={{
            marginTop: 5
        }}
            size={18}
            color="white"/>;
        const defaultIcon = <FaIcons
            name="star"
            style={{
            marginTop: 5
        }}
            size={18}
            color="white"/>;

        return (
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
                <CardItem
                    style={{
                    backgroundColor: '#DF6263',
                    borderRadius: 5,
                    padding: 0,
                    marginBottom: 0,
                    marginTop: 5,
                    marginLeft: 20,
                    marginRight: 10,
                    height:55
                }}>

                    <Body>

                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{
                                flex: 1
                            }}>
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
                                flex: 7
                            }}>
                                <Text style={cardstyles.cardText}>
                                    6452718
                                </Text>
                            </View>
                            <View
                                style={{
                                flex: 4
                            }}>
                                <Text style={cardstyles.cardText}>
                                    510.45$
                                </Text>
                            </View>
                        </View>

                    </Body>

                </CardItem>
                <KeyboardAwareScrollView style={cardstyles.card}>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}>
                                        {received}
                                    </View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}>
                                        {received}
                                    </View>

                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>

                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>

                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>

                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}></View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}>
                                        {received}
                                    </View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={cardstyles.cardItem}>

                            <Body>

                                <View
                                    style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: -5,
                                    marginLeft: -10
                                }}>
                                    <View
                                        style={{
                                        flex: 1
                                    }}>
                                        {received}
                                    </View>
                                    <View
                                        style={{
                                        flex: 7
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

                            </Body>

                        </CardItem>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const cardstyles = StyleSheet.create({
    card: {
        height: '45%',
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
    }
});

const ENTRIES1 = [
    {
        cardType: 'VISA',
        cardHolderName: 'John Doe',
        cardNumber: '1234',
        bankName: 'HSBC UK',
        logo: require('../../assets/visalogo.jpg')
    }, {
        cardType: 'Mastercard',
        cardHolderName: 'John Smith',
        cardNumber: '1234',
        bankName: 'Lloyd UK',
        logo: require('../../assets/mastercardlogo.png')
    }, {
        cardType: 'Discover',
        cardHolderName: 'Veronica Doe',
        cardNumber: '4561',
        bankName: 'HDFC India',
        logo: require('../../assets/discoverlogo.jpg')
    }, {
        cardType: 'American Express',
        cardHolderName: 'Dany Joe',
        cardNumber: '4534',
        bankName: 'ICICI India',
        logo: require('../../assets/american_express.png')
    }, {
        cardType: 'VISA',
        cardHolderName: 'John Smith',
        cardNumber: '8741',
        bankName: 'LLoyds UK',
        logo: require('../../assets/visalogo.jpg')
    }, {
        cardType: 'Maestro',
        cardHolderName: 'John Dan',
        cardNumber: '2147',
        bankName: 'HSBC UK',
        logo: require('../../assets/maestro.png')
    }
];
export default CardDetailsView;