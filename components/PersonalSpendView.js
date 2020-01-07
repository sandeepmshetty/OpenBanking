import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    Dimensions,
    Platform,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    ToastAndroid
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator, NavigationActions, StackActions, createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles, {colors} from './UtilComponents/index.style';
import DrawerContainer from './DrawerContainer';
import mainstyles from './UtilComponents/main.style';
import awsurl from './constants/AWSUrl';
import { Dropdown } from 'react-native-material-dropdown';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FA5Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(props.message, ToastAndroid.LONG, ToastAndroid.TOP, 25, 150,);
        return null;
    }
    return null;
};

class PersonalSpendView extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
   
    componentDidMount() {
    }

    render() {
       
      const hotelIcon = <FaIcons name="taxi" size={28} color="#ffff00"/>;
      const travelIcon = <MIcons name="card-travel" size={28} color="#ffff66"/>;
      const entertainmentIcon = <FA5Icons name="grin-stars" size={28} color="#cc99ff"/>;
      const cutleryIcon = <FaIcons name="cutlery" size={28} color="#cc00cc"/>;
      const planeIcon = <FaIcons name="plane" size={28} color="#ff3399"/>;
      const heartbeatIcon = <FaIcons name="heartbeat" size={28} color="#66ffff"/>;
      const shoppingcartIcon = <FaIcons name="shopping-cart" size={28} color="#cc6600" />;
      const lightbulbIcon =  <FaIcons name="lightbulb-o" size={28} color="#9999ff"/>;
      const moneyIcon = <FaIcons name="money" size={28} color="#669900"/>;
      const cloudIcon = <FaIcons name="cloud" size={28} color="white"/>;

        return (
          <View style={mainstyles.main}>
          <View  style={{backgroundColor:"#293a80", marginTop:5, height: '10%', color: 'white', borderRadius: 5, padding: 5}}>
          <View style={{
                     flexDirection: 'row',                      
                     flex: 1
                 }}>
          <View
                                 style={{
                                 flex:10,
                                 alignItems:'center',
                                 alignContent:'center',
                                 marginTop:10
                             }}>
               <Text style = {{color: '#ffff00', fontSize:18}}>GBP 2.5</Text>
               <Text style = {{fontSize: 14, color: '#85b4ff'}}>December 2019</Text>
               </View>
          </View>
          </View>
         <View  style={{backgroundColor:"#293a80", marginTop:5, height: '80%', color: 'white', borderRadius: 5, padding: 5}}>
           <View style={{flex:1, flexDirection: 'row'}}>   
                           <View
                               style={{
                               marginLeft: 10,
                               marginTop:10,
                               flex: 1,
                               backgroundColor:'transparent'
                           }}>
                               {shoppingcartIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Groceries</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {cloudIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Travel</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Travel</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Transport</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {cutleryIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Food & Drink</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                   <View style={{marginTop:0, flex: 8}}>
                     <Text style={{fontSize: 14, color: 'white'}}>Entertainment</Text>
                   </View>
                   <View style={{marginTop:0, flex: 2}}>
                     <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                   </View>
                 </View>
                 <View style={{marginTop:-10}}>
                   <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {lightbulbIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Bills</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {heartbeatIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Health</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {planeIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Travel</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
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
                               {moneyIcon}
                           </View>
                           <View
                               style={{
                               flex: 9,
                               flexDirection: 'column',
                               marginLeft: 10,
                               backgroundColor:'transparent'
                           }}>
                             <View style={{marginTop:0, flex: 1, flexDirection: 'row'}}>
                               <View style={{marginTop:0, flex: 8}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>Cash</Text>
                               </View>
                               <View style={{marginTop:0, flex: 2}}>
                                 <Text style={{fontSize: 14, color: 'white'}}>GBP 0</Text>
                               </View>
                             </View>
                             <View style={{marginTop:-10}}>
                               <Text style={{fontSize: 14, color: '#85b4ff'}}>0 spends</Text>
                             </View>
                             <View style={{borderColor: '#85b4ff', marginTop: 5, marginBottom: 5, borderWidth: 0.5, height: 0.5}}>
                             </View>
                           </View>
                 </View>
         </View>
       </View>
        )
    }
}

const PersonalSpendViewStack = createStackNavigator({
    PersonalSpendView: {
        screen: PersonalSpendView,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Personal Spend", headerLeft: <View>
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
  PersonalSpendView: {
        screen: PersonalSpendViewStack
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack