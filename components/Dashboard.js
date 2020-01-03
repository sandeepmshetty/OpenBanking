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
import ListOfCardsView from './Views/ListOfCardsView';
import CardDetailsView from './Views/CardDetailsView';
import TransactionDetailsView from './Views/TransactionDetailsView';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FA5Icons from 'react-native-vector-icons/FontAwesome5';

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
    const defaultIcon = <FaIcons name="bar-chart" size={28} color="white"/>;
    const shopIcon = <FaIcons name="shopping-bag" size={28} color="white"/>;
    const hotelIcon = <FaIcons name="hotel" size={28} color="white"/>;
    const travelIcon = <MIcons name="card-travel" size={28} color="white"/>;
    const entertainmentIcon = <FA5Icons name="grin-stars" size={28} color="white"/>;


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
              <View>
                <View style={{
                        marginLeft: 10,
                        marginTop: 10
                    }}>
                  <Text style = {{color: 'white'}}>Total Spending</Text> 
                </View>
                <TouchableOpacity  style={{backgroundColor:"#293a80", marginTop:5, height: 60, color: 'white', borderRadius: 3, padding: 5}}>
                <View style={{flex:1, flexDirection: 'row'}}>   
                                <View
                                    style={{
                                    marginLeft: 10,
                                    marginTop:10,
                                    flex: 1,
                                    backgroundColor:'transparent'
                                }}>
                                    {defaultIcon}
                                </View>
                                <View
                                    style={{
                                    flex: 9,
                                    flexDirection: 'column',
                                    marginLeft: 10,
                                    backgroundColor:'transparent'
                                }}>
                                  <View style={{marginTop:0, backgroundColor:'transparent'}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>GBP 140.45 spent</Text>
                                  </View>
                                  <View style={{marginTop:5, backgroundColor:'transparent'}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>See where you spent in December !</Text>
                                  </View>
                                </View>
                            </View>
              </TouchableOpacity>
              <View style={{
                        height: 30}}>
              <View style={{
                        marginLeft: 10,
                        marginTop: 10,  
                        flexDirection: 'row',                      
                        flex: 1
                    }}>
                       <View
                                    style={{
                                    flex:9,
                                    alignContent:'flex-start'
                                }}>
                  <Text style = {{color: 'white'}}>Spends</Text></View>
                  <View
                                    style={{
                                    marginLeft: 10,
                                    flex:1,
                                    alignContent:'flex-end'
                                }}>
                  <Text style = {{color: '#3683ff'}}>More</Text></View>
                </View>
                </View>
              <View  style={{backgroundColor:"#293a80", marginTop:5, height: '45%', color: 'white', borderRadius: 3, padding: 5}}>
                <View style={{flex:1, flexDirection: 'row'}}>   
                                <View
                                    style={{
                                    marginLeft: 10,
                                    marginTop:10,
                                    flex: 1,
                                    backgroundColor:'transparent'
                                }}>
                                    {shopIcon}
                                </View>
                                <View
                                    style={{
                                    flex: 9,
                                    flexDirection: 'column',
                                    marginLeft: 10,
                                    backgroundColor:'transparent'
                                }}>
                                  <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                                    <View style={{marginTop:0, flex: 7}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>ASDA One Angel Lane</Text>
                                    </View>
                                    <View style={{marginTop:0, flex: 3}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Jan 1, 12:56 PM</Text>
                                    </View>
                                  </View>
                                  <View style={{marginTop:-10}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>GBP 120</Text>
                                  </View>
                                  <View style={{borderColor: '#85b4ff', marginTop: 5, marginBottom: 5, borderWidth: 0.5, height: 0.5}}>
                                  </View>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection: 'row'}}>   
                                <View
                                    style={{
                                    marginLeft: 10,
                                    marginTop:10,
                                    flex: 1,
                                    backgroundColor:'transparent'
                                }}>
                                    {travelIcon}
                                </View>
                                <View
                                    style={{
                                    flex: 9,
                                    flexDirection: 'column',
                                    marginLeft: 10,
                                    backgroundColor:'transparent'
                                }}>
                                  <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                                    <View style={{marginTop:0, flex: 7}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Air India, Heathrow, London</Text>
                                    </View>
                                    <View style={{marginTop:0, flex: 3}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Jan 2, 11:36 PM</Text>
                                    </View>
                                  </View>
                                  <View style={{marginTop:0}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>GBP 10</Text>
                                  </View>
                                  <View style={{borderColor: '#85b4ff', marginTop: 5, marginBottom: 5,  borderWidth: 0.5, height: 0.5}}>
                                  </View>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection: 'row'}}>   
                                <View
                                    style={{
                                    marginLeft: 10,
                                    marginTop:10,
                                    flex: 1,
                                    backgroundColor:'transparent'
                                }}>
                                    {hotelIcon}
                                </View>
                                <View
                                    style={{
                                    flex: 9,
                                    flexDirection: 'column',
                                    marginLeft: 10,
                                    backgroundColor:'transparent'
                                }}>
                                  <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                                    <View style={{marginTop:0, flex: 7}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Hilton, Westminister, London</Text>
                                    </View>
                                    <View style={{marginTop:0, flex: 3}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Jan 3, 10:26 PM</Text>
                                    </View>
                                  </View>
                                  <View style={{marginTop:0}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>GBP 10</Text>
                                  </View>
                                  <View style={{borderColor: '#85b4ff', marginTop: 5, marginBottom: 5, borderWidth: 0.5, height: 0.5}}>
                                  </View>
                                </View>
                            </View>    
                            <View style={{flex:1, flexDirection: 'row'}}>   
                                <View
                                    style={{
                                    marginLeft: 10,
                                    marginTop:10,
                                    flex: 1,
                                    backgroundColor:'transparent'
                                }}>
                                    {entertainmentIcon}
                                </View>
                                <View
                                    style={{
                                    flex: 9,
                                    flexDirection: 'column',
                                    marginLeft: 10,
                                    backgroundColor:'transparent'
                                }}>
                                  <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                                    <View style={{marginTop:0, flex: 7}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Cineworld, Ilford, London</Text>
                                    </View>
                                    <View style={{marginTop:0, flex: 3}}>
                                      <Text style={{fontSize: 14, color: '#85b4ff'}}>Jan 3, 5:30 PM</Text>
                                    </View>
                                  </View>
                                  <View style={{marginTop:0}}>
                                    <Text style={{fontSize: 14, color: 'white'}}>GBP 10</Text>
                                  </View>
                                  <View style={{borderColor: '#85b4ff', marginTop: 5, marginBottom: 5, borderWidth: 0.5, height: 0.5}}>
                                  </View>
                                </View>
                            </View>     
             
              </View>
              
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

const DashboardNavigator = createStackNavigator({

  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Dashboard", 
      headerLeft: <View>
        <TouchableOpacity
          onPress={() => {
          navigation.toggleDrawer()
        }}><Icon name='menu' size={35} color='white'/></TouchableOpacity>
      </View>,
      headerStyle: {
        backgroundColor: '#131642',
        color: 'white'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      }
    })
  }
});

const DrawerStack = createDrawerNavigator({
  Dashboard: {
    screen: DashboardNavigator
  },
  FillCardDetailsView: {
    screen: FillCardDetailsView,
    navigationOptions: {
      headerTitle: "Add Card Details"
    }
  },
  ListOfCardsView: {
    screen: ListOfCardsView,
    navigationOptions: {
      headerTitle: "Your Cards"
    }
  },
  TransactionDetailsView:
  {
    screen: TransactionDetailsView,
    navigationOptions:{
      headerTitle:"Make Transaction"
    }
  },
  CardDetailsView: {
    screen: CardDetailsView
  },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

export default DrawerStack