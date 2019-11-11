import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import ListOfCardsView from './Views/ListOfCardsView';

class MyPage1 extends Component {

  constructor(props) {
    super(props)
  }

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
            <ListOfCardsView />
          </View>
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 10
  },

  card: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent'
  }
});

export default Page1Stack = createStackNavigator({

  MyPage1: {
    screen: MyPage1,
        </View>navigationOptions: ({navigation}) => ({
      headerTitle: "Your Cards", headerLeft: <View>
          <TouchableOpacity
            onPress={() => {
            navigation.toggleDrawer()
          }}><Icon name='menu' size={35}/></TouchableOpacity>
        </View>})
  },

});