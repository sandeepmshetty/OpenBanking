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
    ToastAndroid,
    Switch
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator, NavigationActions, StackActions, createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import Fa5Icons from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SliderEntry from '../UtilComponents/SliderEntry';
import DrawerContainer from '../DrawerContainer';
import mainstyles from '../UtilComponents/main.style';
import ListOfCardsView from './ListOfCardsView';
import awsurl from '../constants/AWSUrl';
import { Dropdown } from 'react-native-material-dropdown';
import {TextInput, ToggleButton} from 'react-native-paper';


const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};

class KYCView extends Component {

    constructor() {
        super();
        this.state = {
            agreed: false,
            email: '',
            phone: '',
            password: '',
            confirmPassword:'',
            name: '',
            otp: '',
            drivingLicense: '',
            passport: '',
            showPasswordStatus: 'unchecked',
            showConfirmPasswordStatus : 'unchecked',
            showPassword: true,
            showConfirmPassword: true,
            visible: false,
            toastermessage: "",
            toasterVisible: false,
            verifyVisible: false,
            isValidEmail: true,
            isValidName: true,
            isValidPhone: true,
            isValidPassword : true,
            isPasswordConfirmed : true,
            isValidConfirmPassword: true
        }
        this.toggleShowPassword = this
            .toggleShowPassword
            .bind(this);
        this.toggleShowConfirmPassword = this
        .toggleShowConfirmPassword
        .bind(this);
        this.isFormValid = false;
    }
    componentDidMount() {
        this.fetchKYCDetails();
    }
    fetchKYCDetails() {
        var cache = require('memory-cache');
        fetch(awsurl.aws_url+'api/kycDetails/'+cache.get('cacheEmail'), {
			method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then((responseJson) => {
                    this.setState({name: responseJson.username,
                        email: responseJson.email,
                        phone: responseJson.phone,
                        passport: responseJson.passport,
                        drivingLicense: responseJson.drivingLicense });
                })
                .then((data) => {
                    this.setState({contacts: data})
                })
                .catch(console.log)
    }
    setPassport(passport) {
        this.setState({toasterVisible : false, toastermessage: ""});
        this.setState({passport});
    }

    setDrivingLicense(drivingLicense) {
        this.setState({toasterVisible : false, toastermessage: ""});
        this.setState({drivingLicense});
    }

    setName(name) {
        this.setState({toasterVisible : false, toastermessage: ""});
        if (name.trim() && validation.allLetterWithSpace(name.trim())) {
            this.setState({isValidName: true});
        } else {
            this.setState({isValidName: false});
        }

        this.setState({name});
    }

    setEmail(email) {
        this.setState({toasterVisible : false, toastermessage: ""});
        if (email.trim() && validation.emailAddress(email.trim())) {
            this.setState({isValidEmail: true});
        } else {
            this.setState({isValidEmail: false});
        }
        email = email.trim();
        this.setState({email});
    }

    setPhone(phone) {
        this.setState({toasterVisible : false, toastermessage: ""});
        if(phone.trim() && validation.phonenumber(phone.trim()))
        {
            this.setState({isValidPhone: true});
        }else{
            this.setState({isValidPhone: false});
        } 
        this.setState({phone});
    }

    setOtp(otp) {
        this.setState({toasterVisible : false, toastermessage: ""});
        this.setState({otp});
    }

    setPassword(password) {
        this.setState({toasterVisible : false, toastermessage: ""});
        if(password.trim() && validation.password(password.trim()))
        {
            if(this.state.confirmPassword.trim() && password.trim() == this.state.confirmPassword.trim())
            {
                this.setState({isValidConfirmPassword : true});
            }else{
                this.setState({isValidConfirmPassword : false});
            } 

            this.setState({isValidPassword: true}); 
        }else{
            this.setState({isValidPassword: false}); 
        } 

        this.setState({password});

    }

    setConfirmPassword(confirmPassword) {
        this.setState({toasterVisible : false, toastermessage: ""});
        if(confirmPassword.trim() && this.state.password.trim() == confirmPassword.trim())
        {
            this.setState({isValidConfirmPassword : true});
        }else{
            this.setState({isValidConfirmPassword : false});
        } 

        this.setState({confirmPassword});
    }

    validateForm()
    {        
        if(this.state.name.trim() != "" && this.state.isValidName  && 
           this.state.email.trim() != "" && this.state.isValidEmail &&  
           this.state.phone.trim() != "" && this.state.isValidPhone &&
           this.state.passport.trim() != "" && this.state.drivingLicense.trim() != "")
        {
            return true;
        }else
        {
            return false;
        }
    }

    agreeToRegister = (value) => {
        this.setState({agreed: value});
    }
    navigateToLogin = () => {
        this
            .props
            .navigation
            .navigate('LoginScreen');
    }
    navigateToHomePage = () => {

        this
            .props
            .navigation
            .navigate('Dashboard');
      }
    callAlert(title, message, func) {
        this.setState({toastermessage: "All fields are mandatory !", toasterVisible: true});
    }
    register() {
        if (!this.validateForm()) {
            this.setState({toastermessage: "Error: Invalid field entry !", toasterVisible: true});
        } else {
            this.setState({toasterVisible : false, toastermessage: ""});
            fetch(awsurl.aws_url+'api/kycUpdate', {
			method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({email: this.state.email, passport: this.state.passport, drivingLicense: this.state.drivingLicense})
                })
                .then(res => res.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    if (responseJson.response === this.state.email) {
                        this.navigateToHomePage();
                    } else {
                        this.setState({toastermessage: responseJson.response, toasterVisible: true});
                        console.log(responseJson.response);
                    }
                })
                .then((data) => {
                    this.setState({contacts: data})
                })
                .catch(console.log)
        }
    }

    toggleShowPassword(value) {
        this.setState({
            showPassword: !this.state.showPassword, toasterVisible :false
        });
        this.setState({
            showPasswordStatus: value === 'checked'
                ? 'unchecked'
                : 'checked'
        });
    }

    toggleShowConfirmPassword(value)
    {
        this.setState({
            showConfirmPassword: !this.state.showConfirmPassword, toasterVisible :false
        });
        this.setState({
            showConfirmPasswordStatus: value === 'checked'
                ? 'unchecked'
                : 'checked'
        });
    }

    render() {
        const personIcon = <Icon name="person" size={20} color="white"/>;
        const emailIcon = <Icon name="email" size={20} color="white"/>
        const phoneIcon = <Icon name="phone" size={20} color="white"/>;
        const passportIcon = <Fa5Icons name="passport" size={20} color="white"/>;
        const driverLicenseIcon = <FaIcons name="drivers-license" size={20} color="white"/>;
        const textColor = { text: 'white', 
        placeholder: 'white', 
        primary: "#0F52BA", 
        background: 'transparent' 
      };

        return (
            <View
                style={{
                flex: 1,
                backgroundColor: '#131642'
            }}>

                {/*<View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            resizeMode: 'cover',
                        }}
                        source={require('../assets/bg_app.png')}
                    />
                    </View>*/}

                <View
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    backgroundColor: '131642',
                    justifyContent: 'center'
                }}>

                    <KeyboardAwareScrollView>

                        {/*<View
                            style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../assets/icon.png')} style={styles.image}/>
                        </View>*/}

                        {!this.state.verifyVisible
                            ? (
                                <View
                                    style={{
                                    backgroundColor: 'transparent',
                                    margin: 20,
                                    padding: 10,
                                    paddingTop: 0,
                                    overflow: 'hidden',
                                    borderRadius: 10
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
                                            {personIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextInput
                                                value={this.state.name}
                                                label="Name"                                                
                                                error={!this.state.isValidName ? 'Name should be in all letters' : ''}
                                                errorColor={!this.state.isValidName ? 'red' : 'white'}
                                                mode='flat'
                                                underlineColor= 'white'
                                                theme={{ colors: textColor }}
                                                onChangeText={(text) => this.setName(text)}/>
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
                                        }}>
                                            {emailIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextInput
                                                label="Email"
                                                error={!this.state.isValidEmail ? 'Incorrect email id' : ''}
                                                errorColor={!this.state.isValidEmail ? 'red' : 'white'}
                                                mode='flat'
                                                underlineColor= 'white'
                                                theme={{ colors: textColor }}
                                                value={this.state.email}
                                                onChangeText={(text) => this.setEmail(text)}/>
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
                                        }}>
                                            {phoneIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextInput
                                                label="Phone"
                                                keyboardType='phone-pad'
                                                error={!this.state.isValidPhone ? 'Invalid phone number' : ''}
                                                errorColor={!this.state.isValidPhone ? 'red' : 'white'}
                                                mode='flat'
                                                underlineColor= 'white'
                                                theme={{ colors: textColor }}
                                                value={this.state.phone}
                                                onChangeText={(text) => this.setPhone(text)}/>
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
                                        }}>
                                            {passportIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextInput
                                                label="Passport"
                                                mode='flat'
                                                underlineColor= 'white'
                                                theme={{ colors: textColor }}
                                                value={this.state.passport}
                                                onChangeText={(text) => this.setPassport(text)}/>
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
                                        }}>
                                            {driverLicenseIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextInput
                                                label="Driving License"
                                                mode='flat'
                                                underlineColor= 'white'
                                                theme={{ colors: textColor }}
                                                value={this.state.drivingLicense}
                                                onChangeText={(text) => this.setDrivingLicense(text)}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start'
                                    }}>

                                        <Switch
                                            onValueChange={this.agreeToRegister}
                                            trackColor="#fcc358"
                                            value={this.state.agreed}/>
                                        <Text
                                            style={{
                                            color: 'white',
                                            alignSelf: 'center',
                                            textAlign: 'left'
                                        }}>I confirm given above details are correct.</Text>

                                    </View>
                                    <View style={styles.buttonStyle}>
                                        <Button
                                            style={{
                                            container: {
                                                height: 45
                                            }
                                        }}
                                            raised
                                            primary
                                            text="Submit"
                                            disabled={!this.state.agreed}
                                            onPress={() => this.register()}/>
                                    </View>
                                </View>
                            )
                            : null}
                    {this.state.toasterVisible ?
                    <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>: null 
    }
                </KeyboardAwareScrollView>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 20
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#FFFFFF'
    },
    main: {
        margin: 20
    },
    image: {
        marginBottom: 0,
        marginTop: 20,
        height: 100,
        width: 100
    },

    buttonContainer: {
        backgroundColor: '#fcc358',
        paddingVertical: 10,
        marginTop: 20,
        height: 50,
        borderRadius: 5
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    footer: {
        height: 30,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: 'gray'
    },
    copyright: {
        textAlign: 'center',
        margin: 20,
        fontSize: 14
    }
});

const KYCViewStack = createStackNavigator({

    KYCView: {
        screen: KYCView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Profile", headerLeft: <View>
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
    KYCView: {
        screen: KYCViewStack
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack