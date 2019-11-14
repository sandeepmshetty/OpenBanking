import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from 'react-navigation';
import styles from './UtilComponents/main.style';

class MyPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'Date', 'Transaction', 'C/D'
      ],
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
      <ImageBackground
        source={require('../assets/bg_gradient.png')}
        style={styles.main}>
       
      </ImageBackground>
    );
  }
}


export default Page2Stack = createStackNavigator({

  MyPage2: {
    screen: MyPage2,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Detailed Transactions", headerLeft: <View>
          <TouchableOpacity
            onPress={() => {
            navigation.toggleDrawer()
          }}><Icon name='menu' size={35}/></TouchableOpacity>
        </View>
    })
  }
});
