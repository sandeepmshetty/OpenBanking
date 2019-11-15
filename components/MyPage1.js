import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import styles from './UtilComponents/main.style';

class MyPage1 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (

      <ImageBackground
        style={styles.main}>
            
        </ImageBackground>
    );
  }

}

export default Page1Stack = createStackNavigator({

  MyPage1: {
    screen: MyPage1,
        navigationOptions: ({navigation}) => ({
      headerTitle: "Your Cards", headerLeft: <View>
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
          }})
  },

});