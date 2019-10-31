import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createStackNavigator, NavigationActions, StackActions} from 'react-navigation';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { Button } from 'react-native-material-ui';

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
      actions: [NavigationActions.navigate({routeName: 'HomePage'})]
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
      this.callAlert("Login Error", "Please enter valid mail Id", console.log("Error, Enter valid mail id"));
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
    const myIcon = <Icon name="login" size={80} color="white" />;

    return (
      <View  style={{
        flex: 1,
        backgroundColor: '#eee',
      }}>
      <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#1E345C'
      }}
    >

    </View>
      <View style={{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
      }}>
        <KeyboardAwareScrollView>
           <View style={styles.main}>
           <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icon.png')} style={styles.image} />
            </View>
              {/*<View style={styles.loginHeader}>
                 {myIcon}
              </View>*/}
            
              <View style={{backgroundColor: '#DF6263', padding: 10, borderRadius: 5}}>              
                <TextField placeholder="Email"  value="johndoe@gmail.com" onChangeText={(text) => this.setEmail(text)} placeholder="Email"/>
                <TextField placeholder="Password" onChangeText={(text) => this.setPassword(text)} placeholder="Password" secureTextEntry={true}/>

                <View>
                   <Button raised primary text="Sign In" style={styles.buttonStyle} onPress={() => this.auth()}/>
                   <Button accent text="Register" style={styles.buttonStyle} onPress={() => this.navigateToRegisterPage()}/>
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
  buttonStyle:{
    height: 45
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
  loginHeader:{
    paddingVertical:10,
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
      headerTitle: "Genpact Open Bank"
    }
  },
  
  HomePage: {
    screen: HomePage,
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
