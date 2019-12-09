import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
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

import Dashboard from './Dashboard';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};

export default class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            switch1Value: false,
            email: '',
            phone: '',
            password: '',
            name: '',
            otp: '',
            status: 'unchecked',
            showPassword: true,
            visible: false,
            toastermessage: "",
            toasterVisible: false,
            verifyVisible: false,
            isValidEmail:false
        }
        this.toggleSwitch = this
            .toggleSwitch
            .bind(this);
    }
    setName(name) {
        this.setState({name})
    }
    setEmail(email) {
        this.setState({email})
    }
    setPhone(phone) {
        this.setState({phone})
    }
    setOtp(otp) {
        this.setState({otp})
    }
    setPassword(password) {
        this.setState({password})
    }
    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value});
        console.log('Switch 1 is: ' + value)
    }
    navigateToLogin = () => {
        this
            .props
            .navigation
            .navigate('LoginScreen');
    }
    callAlert(title, message, func) {
        this.setState({toastermessage: "All fields are mandatory !", toasterVisible: true});
        /* Alert.alert(title, message, [
            {
                text: 'OK',
                onPress: () => func
            }
        ], {cancelable: false})*/
    }
    register() {
        if (this.state.email === '' || this.state.name === '' || this.state.password === '') {

            this.setState({toastermessage: "All fields are mandatory !", toasterVisible: true});

            // this.callAlert("Error", "All fields are mandatory !", console.log("All fields
            // are mandatory !"));
        } else {
            fetch('http://openbanking-env.b8dmm22xtf.us-east-2.elasticbeanstalk.com/api/signUpUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({username: this.state.name, password: this.state.password, email: this.state.email, phone: this.state.phone})
                })
                .then(res => res.json())
                .then((responseJson) => {
                    if (responseJson.response === 'Verify with OTP sent to phone') {
                        this.setState({toastermessage: "Verify with OTP sent to phone !", toasterVisible: true, verifyVisible: true});
                        //this.navigateToLogin()
                    } else {
                        this.setState({toastermessage: "Error verifying otp !", toasterVisible: true});
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
            this.callAlert("Error", "All fields are mandatory !", console.log("All fields are mandatory !"));
        } else {
            fetch('http://openbanking-env.b8dmm22xtf.us-east-2.elasticbeanstalk.com/api/verifyUserO' +
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
                        this.setState({toastermessage: "Verifying Successful !", toasterVisible: true});
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

    toggleSwitch(value) {
        this.setState({
            showPassword: !this.state.showPassword
        });
        this.setState({
            status: value === 'checked'
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
        const phoneIcon = <Icon name="phone" size={20} color="white"/>
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

                        <View
                            style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../assets/icon.png')} style={styles.image}/>
                        </View>
                        

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
                                                keyboardType='phone-pad'
                                                error={!this.state.isValidEmail ? 'Incorrect Email Id' : ''}
                                                errorColor={!this.state.isValidEmail ? 'red' : 'white'}
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
                                                error='Incorrect Phone'
                                                errorColor='white'
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
                                                    status={this.state.status}
                                                    size={20}
                                                    style={{
                                                    backgroundColor: 'transparent',
                                                    marginTop: 15
                                                }}
                                                    onPress={this.toggleSwitch}/>
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
                                                    status={this.state.status}
                                                    size={20}
                                                    style={{
                                                    backgroundColor: 'transparent',
                                                    marginTop: 15
                                                }}
                                                    onPress={this.toggleSwitch}/>
                                            </View>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start'
                                    }}>

                                        <Switch
                                            onValueChange={this.toggleSwitch1}
                                            trackColor="#fcc358"
                                            value={this.state.switch1Value}/>
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
                                            disabled={!this.state.switch1Value}
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
                                                error='Incorrect OTP'
                                                errorColor='white'
                                                onChangeText={(text) => this.setOtp(text)}/>
                                        </View>
                                    </View>}

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

                        <Toast visible={this.state.toasterVisible} message={this.state.toastermessage}/>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        );
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
})