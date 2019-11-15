import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'

class MyPage4 extends Component {
  render() {
    return (
        <ImageBackground
          source={require('../assets/bg_gradient.png')}
          style={{
            padding: 10,
            paddingTop: 0,
            borderRadius: 5
          }}>
            <Text style={styles.text}>My Page 4</Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});


export default Page4Stack = createStackNavigator({

  MyPage4: {
    screen: MyPage4,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "My Page 4",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} color='white'/></TouchableOpacity></View>,
      headerStyle: {
        backgroundColor: '#131642',
        color: 'white'
      },
      headerTitleStyle: {
          fontWeight: 'bold',
      color: 'white'
        }
    })
  },

});
