import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';
class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eee', }}>
        <ImageBackground
          source={require('../assets/bg_gradient.png')}
          style={{
            padding: 10,
            paddingTop: 0,
            borderRadius: 5
          }}>
          <View style={styles.container}>
            <View style={styles.card}>
            </View>
          </View>
        </ImageBackground>
      </View>
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
  },
  card: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth:0,
    borderColor:'transparent'
  }


});


const HomeStack = createStackNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "DashBoard",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});

const DrawerStack = createDrawerNavigator({
  Dashboard: {
    screen: HomeStack
  },
  MyPage1: {
    screen: MyPage1
  },
  MyPage2: {
    screen: MyPage2
  },
  MyPage4: {
    screen: MyPage4
  },
  MyPage5: {
    screen: MyPage5
  }
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

export default DrawerStack