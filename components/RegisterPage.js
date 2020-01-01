import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Switch,
    ToastAndroid,
    ImageBackground
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import faIcon from 'react-native-vector-icons/FontAwesome';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import {TextInput, ToggleButton} from 'react-native-paper';
import {Button} from 'react-native-material-ui';
import {NavigationActions} from 'react-navigation';
import * as validation from '../utility/validation';
import awsurl from './constants/AWSUrl';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};

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

export default class RegisterPage extends Component {

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
           this.state.password.trim() != "" && this.state.isValidPassword &&
           this.state.confirmPassword.trim() != "" && this.state.isValidConfirmPassword)
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
    callAlert(title, message, func) {
        this.setState({toastermessage: "All fields are mandatory !", toasterVisible: true});
    }
    register() {
        console.log("\n isFormValid " + this.validateForm());

        console.log("\n isValidName " + this.state.isValidName);
        console.log("\n isValidEmail " + this.state.isValidEmail);
        console.log("\n isValidPhone " + this.state.isValidPhone);
        console.log("\n isValidPassword " + this.state.isValidPassword);
        console.log("\n isValidConfirmPassword " + this.state.isValidConfirmPassword);


        
        if (!this.validateForm()) {
            this.setState({toastermessage: "Error: Invalid field entry !", toasterVisible: true});
        } else {
            console.log("\n Passed ");
            this.setState({toasterVisible : false, toastermessage: ""});
            fetch(awsurl.aws_url+'api/signUpUser', {
			method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({username: this.state.name, password: this.state.password, email: this.state.email, phone: this.state.phone})
                })
                .then(res => res.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    if (responseJson.response === 'Verify with OTP sent to phone') {
                        this.setState({toastermessage: "Verify with OTP sent to phone !", toasterVisible: true, verifyVisible: true});
                        //this.navigateToLogin()
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
    otpVerify() {

        if (this.state.email === '' || this.state.name === '' || this.state.password === '') {
            this.setState({toasterVisible : true, toastermessage: 'Error: All fields are mandatory'});
        } else {
            this.setState({toasterVisible : false});
            fetch(awsurl.aws_url+'api/verifyUserO' +
                    'TP', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({email: this.state.email, otp: this.state.otp})
                })
                .then(res => res.json())
                .then((responseJson) => {
                    if (responseJson.response === 'Account verified successfully!') {
                        this.setState({toastermessage: "OTP verifed Successful!", toasterVisible: true});
                        this.navigateToLogin()
                    } else {
                        this.setState({toastermessage: "Error verifying account !", toasterVisible: true});
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
        const passwordIcon = <Icon name="lock-open" size={20} color="white"/>
        const emailIcon = <Icon name="email" size={20} color="white"/>
        const showPasswordIcon = <Icon name="showPassword" size={20} color="white"/>;
        const hidePasswordIcon = <Icon name="hidePassword" size={20} color="white"/>;
        const phoneIcon = <Icon name="phone" size={20} color="white"/>;

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
                                            <TextField
                                                baseColor='white'
                                                label="Name"
                                                textColor='white'
                                                error={!this.state.isValidName
                                                    ? 'Name should be in all letters'
                                                    : ''}
                                                    errorColor={!this.state.isValidName
                                                    ? 'red'
                                                    : 'white'}
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
                                            <TextField
                                                baseColor='white'
                                                label="Email"
                                                textColor='white'
                                                error={!this.state.isValidEmail
                                                ? 'Incorrect email id'
                                                : ''}
                                                errorColor={!this.state.isValidEmail
                                                ? 'red'
                                                : 'white'}
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
                                            <TextField
                                                baseColor='white'
                                                label="Phone"
                                                textColor='white'
                                                keyboardType='phone-pad'
                                                error={!this.state.isValidPhone
                                                    ? 'Invalid phone number'
                                                    : ''}
                                                    errorColor={!this.state.isValidPhone
                                                    ? 'red'
                                                    : 'white'}
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
                                            {passwordIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0,
                                            flexDirection: 'row'
                                        }}>
                                            <View
                                                style={{
                                                flex: 7
                                            }}>
                                                <TextField
                                                    baseColor='white'
                                                    label="Password"
                                                    textColor='white'
                                                    error={!this.state.isValidPassword
                                                        ? 'Password should be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
                                                        : ''}
                                                        errorColor={!this.state.isValidPassword
                                                        ? 'red'
                                                        : 'white'}
                                                    onChangeText={(text) => this.setPassword(text)}
                                                    underlineColor='white'
                                                    secureTextEntry={this.state.showPassword}/>
                                            </View>
                                            <View
                                                style={{
                                                flex: 1,
                                                marginTop: 15
                                            }}>
                                                <ToggleButton
                                                    icon={this.state.showPassword
                                                    ? "eye-off"
                                                    : "eye"}
                                                    color="white"
                                                    status={this.state.showPasswordStatus}
                                                    size={20}
                                                    style={{
                                                    backgroundColor: 'transparent',
                                                    marginTop: 15
                                                }}
                                                    onPress={this.toggleShowPassword}/>
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
                                        }}>
                                            {passwordIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0,
                                            flexDirection: 'row'
                                        }}>
                                            <View
                                                style={{
                                                flex: 7
                                            }}>
                                                <TextField
                                                    baseColor='white'
                                                    label="Confirm Password"
                                                    textColor='white'
                                                    error={!this.state.isValidConfirmPassword
                                                        ? 'Password does not match'
                                                        : ''}
                                                    errorColor={!this.state.isValidConfirmPassword
                                                        ? 'red'
                                                        : 'white'}                                                    
                                                    onChangeText={(text) => this.setConfirmPassword(text)}
                                                    underlineColor='white'
                                                    secureTextEntry={this.state.showConfirmPassword}/>
                                            </View>
                                            <View
                                                style={{
                                                flex: 1,
                                                marginTop: 15
                                            }}>
                                                <ToggleButton
                                                    icon={this.state.showConfirmPassword
                                                    ? "eye-off"
                                                    : "eye"}
                                                    color="white"
                                                    status={this.state.showConfirmPasswordStatus}
                                                    size={20}
                                                    style={{
                                                    backgroundColor: 'transparent',
                                                    marginTop: 15
                                                }}
                                                    onPress={this.toggleShowConfirmPassword}/>
                                            </View>
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
                                        }}>I agree to the terms and conditions</Text>

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
                                            text="Register"
                                            disabled={!this.state.agreed}
                                            onPress={() => this.register()}/>
                                    </View>
                                </View>
                            )
                            : null}
                        {this.state.verifyVisible
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
                                            {passwordIcon}
                                        </View>
                                        <View
                                            style={{
                                            flex: 8,
                                            marginTop: 0
                                        }}>
                                            <TextField
                                                baseColor='white'
                                                label="OTP"
                                                textColor='white'
                                                keyboardType='phone-pad'
                                                errorColor='white'
                                                onChangeText={(text) => this.setOtp(text)}/>
                                        </View>
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
                                text="Verify"
                                onPress={() => this.otpVerify()}/>
                        </View>

                    </View>
                    ) : null}
                    {this.state.toasterVisible ?
                    <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>: null 
    }
                </KeyboardAwareScrollView>
            </View>
        </View>)
    }
}