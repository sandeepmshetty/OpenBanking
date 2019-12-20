import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import styles from '../UtilComponents/main.style';
import FillCardDetailsView from './FillCardDetailsView';
import ListOfCardsView from './ListOfCardsView';
import CardDetailsView from './CardDetailsView';
import TransactionDetailsView from  './TransactionDetailsView';

class DashboardView extends Component {

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
            source={require('../../assets/mastercard.jpg')}>
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
                  source={require('../../assets/hsbc.jpg')}
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
                  source={require('../../assets/american_express.png')}
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
    )
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

export default DashboardStack = createStackNavigator({
  DashboardView: {
    screen: DashboardView,
    navigationOptions: {
      header: null
    }
  },
  FillCardDetailsView: {
    screen: FillCardDetailsView,
    navigationOptions: {
      headerTitle: "Add Card Details"
    }
  },
  ListOfCardsView:{
    screen: ListOfCardsView
  },
  TransactionDetailsView:{
    screen: TransactionDetailsView
  },
  CardDetailsView:{
    screen: CardDetailsView
  }
});