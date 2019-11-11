import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Swiper from 'react-native-swiper';

class MyPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Transaction', 'C/D'],
      widthArr: [160, 160, 80]
    }
  }
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 10; i += 1) {
      const rowData = [];

      rowData.push(`25/05/2019`);
      rowData.push(`TFL Transport`);
      rowData.push(`£54`);
      tableData.push(rowData);
    }
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
  },
  header: { height: 50, backgroundColor: '#f3be2d' },
  text: { color: 'white', paddingLeft: 10, textAlign: 'left', fontWeight: 'bold', fontSize: 15 },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#5073b2' },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 220,
  }
});


export default Page2Stack = createStackNavigator({

  MyPage2: {
    screen: MyPage2,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Detailed Transactions",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});
