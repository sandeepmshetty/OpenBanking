import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from 'react-navigation';
import ViewCards from './Views/ViewCards';
import styles from './UtilComponents/main.style';
class MyPage1 extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg_gradient.png')}
        style={styles.main}>
        <ViewCards/>
      </ImageBackground>
    );
  }
}

export default Page1Stack = createStackNavigator({
  MyPage1: {
    screen: MyPage1,
    navigationOptions: ({navigation}) => ({
      headerTitle: "List of Cards", headerLeft: <View>
          <TouchableOpacity
            onPress={() => {
            navigation.toggleDrawer()
          }}><Icon name='menu' size={35}/></TouchableOpacity>
        </View>
    })
  }
});