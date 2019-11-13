import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';
import DashboardView from './Views/DashboardView';
import styles from './UtilComponents/main.style';
class Dashboard extends Component {
  render() {
    return (
      <View
        
        style={styles.main}>
        <DashboardView/>
      </View>      
    );
  }
}

const HomeStack = createStackNavigator({

  Dashboard: {
    screen: Dashboard,
    
    navigationOptions: ({navigation}) => ({
      headerTitle: "Dashboard", headerLeft: <View>
          <TouchableOpacity
            onPress={() => {
            navigation.toggleDrawer()
          }}><Icon name='menu' size={35}/></TouchableOpacity>
        </View>
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