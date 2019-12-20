import React, {Component} from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    View,
    Image,
    ScrollView,    
    ToastAndroid,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator, NavigationActions, StackActions, createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from '../UtilComponents/main.style';
import MyPage1 from '../MyPage1';
import MyPage2 from '../MyPage2';
import MyPage4 from '../MyPage4';
import MyPage5 from '../MyPage5';
import DrawerContainer from '../DrawerContainer';
import ListOfCardsView from './ListOfCardsView';
import awsurl from '../constants/AWSUrl';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
  };

class FillCardDetailsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cardnumber: '',
            expirydate: '',
            cvv: '',
            nameoncard: '',            
            toasterVisible:false,
            toastermessage:''
        }
    }

    navigateToListOfCardPage = () => {
        this
            .props
            .navigation
            .navigate('CardDetailsView');
    }
    setCardNumber(cardnumber) {
        this.setState({ cardnumber:cardnumber, toasterVisible:false })
    }
    setExpiry(expirydate) {
        this.setState({ expirydate:  expirydate,toasterVisible:false })
    }
    setCvv(cvv) {
        this.setState({ cvv:cvv, toasterVisible:false })
    }
    setCardHolderName(nameoncard) {
        this.setState({ nameoncard:nameoncard, toasterVisible:false  })
    }  
    addCard(){
        if (this.state.cardnumber === '') {
            this.navigateToListOfCardPage();
        } else {
            fetch(awsurl.aws_url+'api/card/addCard', {  
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bank_card_number: this.state.cardnumber,
                    expires_date: this.state.expirydate,
                    cvv: this.state.cvv,
                    name_on_card: this.state.nameoncard,
                })
            })
            .then(res => res.json())
            .then((responseJson) => {
                    if(responseJson.response === "Success") {
                        this.navigateToListOfCardPage();
                    } 
                    else {
                        this.setState({toasterVisible : true, toastermessage: 'Alert: ' +responseJson.response});
                    }
                })
            .catch(console.log)
        }
    }
    callAlert(title, message, func) {
        Alert.alert(title, message, [
          {
            text: 'OK',
            onPress: () => func
          }
        ], { cancelable: false })
    }
    render() {
        const creditCardIcon = <Icon name="credit-card" size={20} color="white"/>;
        const locationIcon = <Icon name="location-on" size={20} color="white"/>;
        const visaIcon = <FaIcons name="cc-visa" size={30} color="white"/>;

        return (
            <View style={styles.main}>
                <View>
                    <Text style={localstyles.wordBold}>Add credit card or debit card</Text>
                </View>
                <View>
                    <Text style={localstyles.gop_info_text}>
                        Please make sure cardholder name and other information is exactly as it appears
                        on card</Text>
                </View>
                <ScrollView
                    style={{
                    height: '83%',
                    margin: 5,
                    marginBottom: 10,
                    overflowY: 'auto',
                    padding: 5,
                    borderRadius: 3
                }}>
                    <ImageBackground
                        source={require('../../assets/bg_gradient.png')}
                        style={styles.main}
                        style={{
                        overflow: 'hidden',
                        borderRadius: 10,
                        padding: 5
                    }}>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{
                                flex: 1,
                                marginTop: 35,
                                marginRight: -10
                            }}>
                                {creditCardIcon}
                            </View>
                            <View
                                style={{
                                flexDirection: 'row',
                                flex: 9,
                                marginTop: 0
                            }}>
                                <View
                                    style={{
                                    flex: 10,
                                    marginTop: 0
                                }}>
                                    <TextField
                                        label='Card number'
                                        onChangeText={(text) => this.setCardNumber(text)}
                                        baseColor='white'
                                        textColor='white'
                                        keyboardType='phone-pad'/>
                                </View>
                                <View
                                    style={{
                                    flex: 1.5,
                                    marginTop: 30
                                }}>
                                    {visaIcon}
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{
                                flex: 1,
                                marginTop: 35,
                                marginRight: -10
                            }}></View>
                            <View
                                style={{
                                flex: 4,
                                marginTop: 0
                            }}>
                                <TextField baseColor='white' textColor='white'
                                onChangeText={(text) => this.setExpiry(text)}
                                label='MM/YY'/>
                            </View>
                            <View
                                style={{
                                flex: 1,
                                marginTop: 35,
                                marginRight: -10
                            }}></View>
                            <View
                                style={{
                                flex: 4,
                                marginTop: 0
                            }}>
                                <TextField baseColor='white' textColor='white'
                                onChangeText={(text) => this.setCvv(text)}
                                label='CVC'/>
                            </View>
                        </View>

                        <View
                            style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}>
                            <View
                                style={{
                                flex: 1,
                                marginTop: 35,
                                marginRight: -10
                            }}></View>
                            <View
                                style={{
                                flex: 10,
                                marginTop: 0
                            }}>
                                <TextField baseColor='white' textColor='white'
                                onChangeText={(text) => this.setCardHolderName(text)}
                                label='Name'/>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                <View
                    style={{
                    marginLeft: 10,
                    marginRight: 10
                }}>
                    <Button
                        style={{
                        container: {
                            height: 45
                        }
                    }}
                        onPress={() => this.addCard()}
                        raised
                        primary
                        text="Save"/>
                </View>
                <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>
            </View>
        )
    }
}
const localstyles = StyleSheet.create({
    wordBold: {
        fontFamily: "Roboto",
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    gop_info_text: {
        fontFamily: "Roboto",
        color: 'lightgray',
        textAlign: 'center',
        fontSize: 15,
        margin: 1
    }
});

const FillCardDetailsViewStack = createStackNavigator({

    FillCardDetailsView: {
        screen: FillCardDetailsView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Add card details", headerLeft: <View>
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
    FillCardDetailsView: {
        screen: FillCardDetailsViewStack
    },
    ListOfCardsView: {
        screen: ListOfCardsView,
        navigationOptions: {
            headerTitle: "Your Cards"
        }
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack