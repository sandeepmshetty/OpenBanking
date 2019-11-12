import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Switch,
    ImageBackground
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';

export default class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
            switch1Value: false
        }
    }

    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
    }

    render() {
        return (
            <View
                style={{
                flex: 1,
                backgroundColor: '#eee'
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

                <ImageBackground
                    source={require('../assets/bg_gradient.png')}
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}></ImageBackground>

                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}>
                    <KeyboardAwareScrollView>
                        <View
                            style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../assets/icon.png')} style={styles.image}/>

                            <Text
                                style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 22
                            }}>
                                Registration Form
                            </Text>
                        </View>

                        <View
                            style={{
                            backgroundColor: 'transparent',
                            margin: 20,
                            padding: 10,
                            paddingTop: 0,
                            borderRadius: 5
                        }}>

                            <TextField baseColor='white' label="Name" textColor='white' placeholder="Name"/>

                            <TextField
                                baseColor='white'
                                label="Email"
                                textColor='white'
                                placeholder="Email"/>

                            <TextField
                                baseColor='white'
                                label="Password"
                                textColor='white'
                                placeholder="Password"
                                secureTextEntry={true}/>
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
                                    text="Register"/>
                            </View>
                        </View>
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
