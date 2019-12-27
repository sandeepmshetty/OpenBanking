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
    ImageBackground,
    ToastAndroid
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
import DrawerContainer from '../DrawerContainer';
import mainstyles from '../UtilComponents/main.style';
import ListOfCardsView from './ListOfCardsView';
import awsurl from '../constants/AWSUrl';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 0;

class TransactionDetailsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            transactionResults: {
                id: '',
                details: {
                    type: '',
                    description: '',
                    completed: '',
                    new_balance: {
                        currency: '',
                        amount: ''
                    },
                    value: {
                        currency: '',
                        amount: ''
                    }
                }
            },
            cardsresults: {
                bank_id: '',
                cvv: '',
                branchId: '',
                accountId: '',
                phone: '',
                lastCode: '',
                default: '',
                bank_card_number: '',
                name_on_card: '',
                expires_date: '',
                technology: ''
            },
            payAmount: '',
            payCvv: '',
            payDesc: '',
            toastermessage: "",
            toasterVisible: false,
        }
        this.getTransactionData = this
            .getTransactionData
            .bind(this);
        this.getCardsData = this
            .getCardsData
            .bind(this);
    }
    setpayAmount(payAmount) {
        this.setState({ payAmount:payAmount, toasterVisible:false })
    }
    setpayCvv(payCvv) {
        this.setState({ payCvv:payCvv, toasterVisible:false })
    }
    setpayDesc(payDesc) {
        this.setState({ payDesc:payDesc, toasterVisible:false })
    }
    componentDidMount() {
        this.getTransactionData();
        this.getCardsData();
    }

    getTransactionData() {

        fetch(awsurl.aws_url + 'api/transaction/transactionList/obp-bankx-m/simply_sameer_account_662550', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((responseJson) => {
                this.setState({transactionResults: responseJson})
                var count = Object
                    .keys(responseJson)
                    .length;
                for (let i = 0; i < responseJson.length; i++) {
                    console.log(this.state.transactionResults[i].id);
                    console.log(this.state.transactionResults[i].details.type);

                }
            })
            .catch(console.log)

    }
    navigateToListOfCardPage = () => {
        this
            .props
            .navigation
            .navigate('CardDetailsView');
    }
    makePayment(){
        console.log('Payment');
        var that = this;
        if (this.state.payAmount === '') {
            console.log('Payment Not Sent');
            this.navigateToListOfCardPage();
        } else {
            console.log('Payment Sent');
            fetch(awsurl.aws_url+'api/transaction/makeTransaction/obp-bankx-m/simply_sameer_account_662550/owner/FREE_FORM', {  
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    value: {
                        currency: "EUR",
                        amount: this.state.payAmount
                    },
                    description: this.state.payDesc,
                })
            })
            .then(res => res.json())
            .then((responseJson) => {
                console.log('Payment Response');
                        that.setState({toasterVisible : true, toastermessage: 'Alert: Success'});
                        console.log('Payment toaster');
                        that.navigateToListOfCardPage();
                        console.log('Payment finish');

                })
            .catch(console.log)
        }
    }

    getCardsData() {

        fetch(awsurl.aws_url + 'api/card/cardList', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((responseJson) => {
                this.setState({cardsresults: responseJson})
                var count = Object
                    .keys(responseJson)
                    .length;
                ENTRIES1.splice(0, ENTRIES1.length);
                ENTRIES1.push({
                    cardType: '',
                    cardHolderName: '',
                    cardNumber: '',
                    bankName: '',
                    logo: require('../../assets/maestro.png'),
                    isAddCard: true
                });
                for (let i = 0; i < responseJson.length; i++) {
                    console.log(this.state.cardsresults[i].bank_card_number);
                    console.log(this.state.cardsresults[i].name_on_card);
                    console.log(this.state.cardsresults[i].expires_date);
                    ENTRIES1.push({
                        cardType: this.state.cardsresults[i].technology,
                        cardHolderName: this.state.cardsresults[i].name_on_card,
                        cardNumber: this.state.cardsresults[i].bank_card_number,
                        bankName: this.state.cardsresults[i].bank_id,
                        logo: require('../../assets/discoverlogo.jpg'),
                        isAddCard: false
                    });
                }
            })
            .catch(console.log)

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
            .navigate('CardDetailsView');
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
        var detailedTransactions = [];
        for (let i = 0; i < this.state.transactionResults.length; i++) {

            detailedTransactions.push(
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
                                <Text style={cardstyles.cardText}>{this.state.transactionResults[i].details.completed}</Text>
                            </View>

                            <View
                                style={{
                                flex: 7
                            }}>
                                <Text style={cardstyles.cardText}>
                                    {this.state.transactionResults[i].details.description}
                                </Text>
                            </View>
                            <View
                                style={{
                                flex: 5
                            }}>
                                <Text style={cardstyles.cardText}>
                                    {this.state.transactionResults[i].details.value.currency}
                                    {this.state.transactionResults[i].details.value.amount}
                                </Text>
                            </View>
                            <View
                                style={{
                                flex: 5
                            }}>
                                <Text style={cardstyles.cardText}>
                                    {this.state.transactionResults[i].details.new_balance.currency}
                                    {this.state.transactionResults[i].details.new_balance.amount}
                                </Text>
                            </View>
                        </View>

                    </ImageBackground>
                </TouchableOpacity>
            )
        }
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
                        <ImageBackground
                            style={{
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: 10,
                            marginTop: 10,
                            padding: 5
                        }}>
                            <View
                                style={{
                                flex: 1,
                                alignItems: 'stretch'
                            }}>
                                <Text
                                    style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    alignSelf: 'stretch',
                                    fontSize: 22
                                }}>Tesco, One Angel Lane, London Bridge, E79AP, United Kingdom</Text>
                                <View
                                    style={{
                                    flex: 10,
                                    width: '100%',
                                    marginTop: 0
                                }}>
                                    <TextField
                                        label='Amount'
                                        baseColor='white'
                                        textColor='white'
                                        onChangeText={(text) => this.setpayAmount(text)}
                                        keyboardType='phone-pad'/>
                                </View>
                                <View
                                    style={{
                                    flex: 10,
                                    width: '30%',
                                    marginTop: 0
                                }}>
                                    <TextField
                                        label='CVV'
                                        baseColor='white'
                                        textColor='white'
                                        onChangeText={(text) => this.setpayCvv(text)}
                                        keyboardType='phone-pad'/>
                                </View>
                                <View
                                    style={{
                                    flex: 10,
                                    width: '100%',
                                    marginTop: 0
                                }}>
                                    <TextField
                                        label='Notes'
                                        onChangeText={(text) => this.setpayDesc(text)}
                                        baseColor='white'
                                        textColor='white'/>
                                </View>
                                <View>
                                    <Button
                                        style={{
                                        container: {
                                            height: 45
                                        }
                                    }}
                                    onPress={() => this.makePayment()}
                                        raised
                                        primary
                                        text="Pay"/>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                {this.state.toasterVisible ?
                    <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>: null 
    }
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
        fontSize: 12,
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
    }
];
const TransactionDetailsViewStack = createStackNavigator({

    TransactionDetailsView: {
        screen: TransactionDetailsView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Pay from card", headerLeft: <View>
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
    TransactionDetailsView: {
        screen: TransactionDetailsViewStack
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack