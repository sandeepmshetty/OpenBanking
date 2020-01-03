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
import DrawerContainer from '../DrawerContainer';
import mainstyles from '../UtilComponents/main.style';
import ListOfCardsView from './ListOfCardsView';
import awsurl from '../constants/AWSUrl';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 0;

class CardDetailsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            transactionResults: {
                id:'',
                details:{type:'',description:'',completed:'',new_balance:{currency:'',amount:''},value:{currency:'',amount:''}},
                this_account:{id: ''}
            },
            cardsresults: {
                bank_id:'',
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
            ENTRIES : [],
            detailedTransactions : []


        }
        this.getTransactionData = this.getTransactionData.bind(this);
        this.getCardsData = this.getCardsData.bind(this);
    }

    componentDidMount(){
        this.getTransactionData();
        this.getCardsData();
    } 
    
    getTransactionData(){
    
        fetch(awsurl.aws_url+'api/transaction/transactionList/obp-bankx-m/simply_sameer_account_662550', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then((responseJson) => {
        this.setState({
            transactionResults: responseJson
          })
          var count = Object.keys(responseJson).length;
          for(let i=0; i< responseJson.length; i++){
              console.log(this.state.transactionResults[i].id);
              console.log(this.state.transactionResults[i].details.type);

            }
        })
      .catch(console.log)

    }
    getCardsData(){
    
        fetch(awsurl.aws_url+'api/card/cardList', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then((responseJson) => {
          var ENTRIES1 = [];
          var count = Object.keys(responseJson).length;
          
          for(let i=0; i< responseJson.length; i++){
              console.log(responseJson[i].bank_card_number);
              console.log(responseJson[i].name_on_card);
              console.log(responseJson[i].expires_date);
              var crdnumber = responseJson[i].bank_card_number;
              ENTRIES1.push( {
                cardType: responseJson[i].technology,
                cardHolderName: responseJson[i].name_on_card,
                cardNumber: crdnumber.substring(crdnumber.length-5,crdnumber.length-1),
                bankName: responseJson[i].bank_id,
                accountName: responseJson[i].account.id,
                logo:  require('../../assets/discoverlogo.jpg'),
                isAddCard:false,
            });
            }
            ENTRIES1.push( {
                cardType: '',
                cardHolderName: '',
                cardNumber: '',
                bankName: '',
                accountName: '',
                logo: require('../../assets/maestro.png'),
                isAddCard: true
            });
            this.setState({
                cardsresults: responseJson,
                ENTRIES: ENTRIES1
              })
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
            .navigate('FillCardDetailsView');
    }

    _renderItemWithParallax({
        item,
        index
    }, parallaxProps) {
        return (
                <SliderEntry
                    data={item}
                    even={(index + 1) % 2 === 0}
                    parallax={true}
                    parallaxProps={parallaxProps}/>
        );
    }
    detailedTransactioRender(acntName){
        this.state.detailedTransactions = [];
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
            console.log(acntName);
        for(let i = 0; i < this.state.transactionResults.length; i++){
            if(this.state.transactionResults[i].this_account.id === acntName) {
                this.state.detailedTransactions.push(
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
                                    <Text style={cardstyles.cardText}>{this.state.transactionResults[i].details.completed.substring(0,10)}</Text>
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
                                        {/*this.state.transactionResults[i].details.value.currency*/}
                                        {this.state.transactionResults[i].details.value.amount}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                    flex: 5
                                }}>
                                    <Text style={cardstyles.cardText}>
                                        {/*this.state.transactionResults[i].details.new_balance.currency*/}
                                        {this.state.transactionResults[i].details.new_balance.amount}
                                    </Text>
                                </View>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                )
            }
        }
    }
    render() {
        
        const slideWidth = this.wp(90);
        const itemHorizontalMargin = this.wp(2);

        const sliderWidth = viewportWidth;
        const itemWidth = slideWidth + itemHorizontalMargin * 2;

        const {slider1ActiveSlide} = this.state;

        const defaultIcon = <FaIcons
            name="star"
            style={{
            marginTop: 5
        }}
            size={18}
            color="white"/>;
        console.log('Slider: '+this.state.slider1ActiveSlide+ ': Entries Size: '+ this.state.ENTRIES.length)
        if(this.state.ENTRIES.length == 0) 
        return (<View style={mainstyles.main}></View>)
        else
        return (
            <View style={mainstyles.main}>
                <View style={{
                    marginLeft: -10
                }}><Carousel
                    ref={c => this._slider1Ref = c}
                    data={this.state.ENTRIES}
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
                    onSnapToItem={(index) => {this.setState({slider1ActiveSlide: index})
                                            this.detailedTransactioRender(this.state.ENTRIES[index].accountName)
                                            console.log("cours:"+this.state.ENTRIES[index].accountName)}}/>
                    <Pagination
                        dotsLength={this.state.ENTRIES.length}
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
                        {slider1ActiveSlide != this.state.ENTRIES.length-1
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
                                                <Text style={cardstyles.cardText}>Date</Text>
                                            </View>

                                            <View
                                                style={{
                                                flex: 7,
                                                marginLeft: 25
                                            }}>
                                                <Text style={cardstyles.cardText}>
                                                    Description
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                flex: 4,
                                                marginLeft: 25
                                            }}>
                                                <Text style={cardstyles.cardText}>
                                                    Value
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                flex: 4,
                                                marginLeft: 25
                                            }}>
                                                <Text style={cardstyles.cardText}>
                                                    Bal
                                                </Text>
                                            </View>
                                        </View>

                                    </ImageBackground>
                                    <KeyboardAwareScrollView>
                                        {this.state.detailedTransactions}
                                    </KeyboardAwareScrollView>
                                </View>
                            )
                            : <ImageBackground
                                source={require('../../assets/bg_gradient.png')}
                                style={{
                                height: '100%',
                                overflow: 'hidden',
                                borderRadius: 10,
                                marginTop:10,
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


const CardDetailsViewStack = createStackNavigator({

    CardDetailsView: {
        screen: CardDetailsView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Cards", headerLeft: <View>
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
        screen: CardDetailsViewStack
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack