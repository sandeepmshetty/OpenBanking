import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Switch,
    ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
import {NavigationActions} from 'react-navigation';

import Dashboard from './Dashboard';

export default class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            switch1Value: false,
            email: '',
            password: '',
            name: ''
        }
    }
    setName(name) {
        this.setState({ name })
    }
    setEmail(email) {
        this.setState({ email })
    }
    setPassword(password) {
        this.setState({ password })
    }
    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + value)
    }
    navigateToLogin = () => {
        this
      .props
      .navigation
      .navigate('LoginScreen');
    }
    callAlert(title, message, func) {
        Alert.alert(title, message, [
            {
                text: 'OK',
                onPress: () => func
            }
        ], { cancelable: false })
    }
    register() {

        if (this.state.email === '' || this.state.name === '' || this.state.password === '') {
            this.callAlert("Error", "All fields are mandatory !", console.log("All fields are mandatory !"));
        } else {
            fetch('http://elbeanstalk-env.x42kkkbzjx.eu-west-2.elasticbeanstalk.com/api/signUpUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.name,
                    password: this.state.password,
                    email: this.state.email
                })
            })
                .then(res => res.json())
                .then((responseJson) => {
                    if (responseJson.response === 'Success') {
                        Alert.alert("User Created Successfully !")
                        this.navigateToLogin()
                    } else {
                        this.callAlert("Error", responseJson.response, console.log(responseJson.response));
                    }
                })
                .then((data) => {
                    this.setState({ contacts: data })
                })
                .catch(console.log)
        }
    }
    render() {
        const personIcon = <Icon name="person" size={20} color="white" />;
        const passwordIcon = <Icon name="lock-open" size={20} color="white" />
        const emailIcon = <Icon name="email" size={20} color="white" />
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
                        height: '100%'
                    }}>

                    <View
                        style={{
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
                                <Image source={require('../assets/icon.png')} style={styles.image} />

                                <Text
                                    style={{
                                        color: 'white',
                                        textAlign: 'center',
                                        fontSize: 22
                                    }}>
                                    Registration Form
                            </Text>
                            </View>

                            <ImageBackground
                                source={require('../assets/bg_gradient.png')}
                                style={{
                                    backgroundColor: 'transparent',
                                    margin: 20,
                                    padding: 10,
                                    paddingTop: 0,
                                    borderRadius: 5
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginTop: 35, marginRight: -10 }}>
                                        {personIcon}
                                    </View>
                                    <View style={{ flex: 8, marginTop: 0 }}>
                                        <TextField baseColor='white' label="Name" textColor='white' onChangeText={(text) => this.setName(text)} />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginTop: 35, marginRight: -10 }}>
                                        {emailIcon}
                                    </View>
                                    <View style={{ flex: 8, marginTop: 0 }}>
                                        <TextField baseColor='white' label="Email" textColor='white' onChangeText={(text) => this.setEmail(text)} />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginTop: 35, marginRight: -10 }}>
                                        {passwordIcon}
                                    </View>
                                    <View style={{ flex: 8, marginTop: 0 }}>
                                        <TextField baseColor='white' label="Password" textColor='white' onChangeText={(text) => this.setPassword(text)}
                                            secureTextEntry={true} />
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
                                        value={this.state.switch1Value} />
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
                                        text="Register" onPress={() => this.register()} />
                                </View>
                            </ImageBackground>
                        </KeyboardAwareScrollView>
                    </View>
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
        marginBottom: 20,
        marginTop: 50,
        height: 80,
        width: 80
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
