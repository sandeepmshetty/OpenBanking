import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {Card, CardItem, Body} from "native-base";
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import Dashboard from './Dashboard';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';

import DashboardView from './Views/DashboardView';
import FillCardDetailsView from './Views/FillCardDetailsView';
import ListOfCardsView from './Views/ListOfCardsView';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import CardDetailsView from './Views/CardDetailsView';

let resizeMode = 'cover';

class HomePage extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#eee'
      }}>
        <View
          style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#1E345C'
        }}></View>

        <View style={styles.container}>
          <View style={styles.card}>
            <CardDetailsView/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:0,
    borderColor:'transparent',
    padding:10
  },

  card: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth:0,
    borderColor:'transparent'
  }
})

const HomeStack = createStackNavigator({

  HomePage: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Add Card", headerLeft: <View>
          <TouchableOpacity
            onPress={() => {
            navigation.toggleDrawer()
          }}><Icon name='menu' size={35}/></TouchableOpacity>
        </View>
    })
  }
});


