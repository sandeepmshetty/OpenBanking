import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import mainstyles from './UtilComponents/main.style';
import awsurl from './constants/AWSUrl';

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({routeName: route});
    this
      .props
      .navigation
      .dispatch(navigateAction);
  }

  render() {
    var cache = require('memory-cache');

    return (
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: '#131642'}}>
          <View >

            <ImageBackground
              style={{
              flex: 1,
              width: '100%',
              height: 250,
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}
              source={require('../assets/bg_gradient.png')}>

              <View style={{
                marginLeft: 10
              }}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/icon.png")}
                    style={{
                    width: 120,
                    height: 130,
                    marginTop:40,
                    paddingTop: 50,
                  }}/>
                </TouchableOpacity>

                <Text
                  style={{
                  color: 'white',
                  fontSize: 14,
                  marginTop: 20
                }}>
                  {cache.get('cacheName')}
                </Text>
                <Text
                  style={{
                  color: 'white',
                  fontSize: 14
                }}>
                  {cache.get('cacheEmail')}
                </Text>

              </View>

            </ImageBackground>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('Dashboard')}>
                <Icon name='animation' size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Dashboard</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('FillCardDetailsView')}>
                <Icon name='credit-card-plus' size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Add Card</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('TransactionDetailsView')}>
                <MIcon name='payment' size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Payment</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('CardDetailsView')}>
                <Icon name='cards-outline' size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Cards</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('PersonalSpendView')}>
                <FaIcons name="bar-chart" size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Insights</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navSectionStyle}>
              <TouchableOpacity
                style={styles.drawerMenu}
                onPress={this.navigateToScreen('KYCView')}>
                <MIcon name='person' size={iconSize} style={styles.drawerIcon}/>
                <Text style={styles.navItemStyle}>Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.drawerMenu}
            onPress={this.navigateToScreen('LoginScreen')}>
            <Icon name='logout' size={iconSize} style={styles.drawerIcon}/>
            <Text style={styles.navItemStyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navItemStyle: {
    padding: 15,
    marginLeft: 20,
    color: 'white'
  },
  navSectionStyle: {
    marginLeft: 20
  },

  drawerIcon: {
    color: "white"
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'red',
    color: '#003759'
  },
  footerContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#131642'
  }
})