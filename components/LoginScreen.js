import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createStackNavigator, NavigationActions, StackActions} from 'react-navigation';
import Dashboard from './Dashboard';
import RegisterPage from './RegisterPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './constants/colors';
import {Button} from 'react-native-material-ui';

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: 'johndoe@gmail.com',
      password: '123456'
    }
  }

  componentDidMount() {
    //this.callAlert("Notice", "Email: johndoe@gmail.com | Password: 123456", null)
  }

  setEmail(email) {
    this.setState({email})
  }

  setPassword(password) {
    this.setState({password})
  }

  navigateToHomePage = () => {

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Dashboard'})]
    });

    this
      .props
      .navigation
      .dispatch(resetAction);
  }

  navigateToRegisterPage = () => {
    this
      .props
      .navigation
      .navigate('RegisterPage');

  }

  auth() {
    if (this.state.email === '' || this.state.matricule === '') {
      this.callAlert("Login Error", "Invalid field value", console.log("Error, Invalid field value"));
    } else if (this.state.email.toLowerCase() === 'johndoe@gmail.com' && this.state.password === '123456') {
      this.navigateToHomePage()
    } else {
      this.callAlert("Error", "User does not exists", console.log("Error, User does not exists"));
    }
  }

  callAlert(title, message, func) {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: () => func
      }
    ], {cancelable: false})
  }

  render() {
    const resizeMode = 'cover';
    const text = 'LOGIN';
    const emailIcon = <Icon name="email" size={20} color="white"/>;
    const passwordIcon = <Icon name="lock-open" size={20} color="white"/>

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#eee'
      }}>
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
            <View style={styles.main}>
              <View
                style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={require('../assets/icon.png')} style={styles.image}/>
              </View>

              <View
                style={{
                padding: 5,
                paddingTop: 0,
                borderRadius: 5
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
                    {emailIcon}
                  </View>
                  <View
                    style={{
                    flex: 8,
                    marginTop: 0
                  }}>
                    <TextField
                      placeholder="Email"
                      label="Email"
                      baseColor='white'
                      textColor='white'
                      value="johndoe@gmail.com"
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
                    {passwordIcon}
                  </View>
                  <View
                    style={{
                    flex: 8,
                    marginTop: 0
                  }}>
                    <TextField
                      baseColor='white'
                      textColor='white'
                      label="Password"
                      placeholder="Password"
                      onChangeText={(text) => this.setPassword(text)}
                      value="123456"
                      secureTextEntry={true}/>
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
                    text="Sign In"
                    onPress={() => this.auth()}/>
                </View>
                <View style={styles.buttonStyle}>
                  <Text
                    style={{
                    color: 'white',
                    textAlign: 'right',
                    alignSelf: 'stretch'
                  }}
                    onPress={() => this.navigateToRegisterPage()}>Don't have an account yet ?</Text>

                </View>
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
    marginTop: 10
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 120,
    width: 120
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
  loginHeader: {
    paddingVertical: 10,
    backgroundColor: '#3480eb',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    margin: 20
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 150,
    width: 150
  },
  buttonContainer: {
    backgroundColor: '#5194ff',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonContainer2: {
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

export default LoginStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },

  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  RegisterPage: {
    screen: RegisterPage,
    navigationOptions: {
      headerTitle: "Registration"
    }

  }
});
