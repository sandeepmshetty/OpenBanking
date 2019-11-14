import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';
import DashboardView from './Views/DashboardView';
import styles from './UtilComponents/main.style';
import FillCardDetailsView from './Views/FillCardDetailsView';

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  navigateToAddCardPage = () => {
    this
      .props
      .navigation
      .navigate('FillCardDetailsView');
  }

  render() {
    return (
        <View style={styles.main}>
          <View>
            <Text style={localStyles.wordBold}>Lets add a Payment Card</Text>
          </View>
          <View style={localStyles.image}>

            <ImageBackground
              imageStyle={{
              borderRadius: 10
            }}
              style={{
              flex: 1,
              borderRadius: 5,
              width: '100%',
              height: '100%'
            }}
              source={require('../assets/mastercard.jpg')}>
              <View
                style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                <Text
                  style={{
                  marginLeft: 30,
                  marginTop: 30,
                  fontSize: 25
                }}>VISA</Text>
                <View
                  style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 10,
                  marginTop: -15
                }}>
                  <Image
                    source={require('../assets/hsbc.jpg')}
                    resizeMode='contain'
                    style={{
                    height: 100,
                    width: 80
                  }}/>
                </View>
              </View>
              <View
                style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                <View
                  style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginLeft: 40,
                  marginBottom: 36
                }}>
                  <Text style={{
                    fontSize: 17
                  }}>&bull; &bull; &bull; &bull; XXXX</Text>
                </View>
                <View
                  style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 10,
                  marginTop: 10
                }}>
                  <Image
                    source={require('../assets/american_express.png')}
                    resizeMode='contain'
                    style={{
                    height: 100,
                    width: 80
                  }}/>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View>
            <Button
              style={{
              container: {
                height: 45
              }
            }}
              raised
              primary
              text="Add Card"
              onPress={() => this.navigateToAddCardPage()}/>
          </View>
        </View>
      
    );
  }
}

const localStyles = StyleSheet.create({
  wordBold: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  image: {
    marginBottom: 20,
    marginTop: 20,
    overflow: "hidden",
    height: 230,
    borderRadius: 10,
    width: '98%'
  }
});

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
  }
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
  },
  FillCardDetailsView: {
    screen: FillCardDetailsView,
    navigationOptions: {
      headerTitle: "Add Card Details"
    }

  }
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

export default DrawerStack