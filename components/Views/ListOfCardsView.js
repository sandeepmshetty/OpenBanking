import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DrawerContainer from '../DrawerContainer';
import mainstyles from '../UtilComponents/main.style';
import CardDetailsView from './CardDetailsView';
class ListOfCardsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //Lets initialize results with the same struct we expect to receive from the api
            results: {
                bank_id:'',
                cvv: '',
                branchId: '',
                accountId: '',
                phone: '',
                lastCode: '',
                default: '',
                bank_card_number: '',
                name_on_card: '',
                expires_date: '',
                technology: ''
            }
        };
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
        this.getData();
    } 
    
    getData(){
    
        fetch('http://openbanking-env.8yuyfmykpp.us-east-1.elasticbeanstalk.com/api/card/cardList', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then((responseJson) => {
        this.setState({
            results: responseJson
          })
          var count = Object.keys(responseJson).length;
          for(let i=0; i< responseJson.length; i++){
              console.log(this.state.results[i].bank_card_number);
              console.log(this.state.results[i].name_on_card);
              console.log(this.state.results[i].expires_date);

            }
        })
      .catch(console.log)

    }
    navigateToCardDetailsViewPage = () => {
        this
            .props
            .navigation
            .navigate('CardDetailsView');
    }

    navigateToAddCardPage = () => {
        this
            .props
            .navigation
            .navigate('FillCardDetailsView');
    }

    render() {
        var cards = [];
        for(let i = 0; i < this.state.results.length; i++){
            
            cards.push(

                <TouchableOpacity onPress={() => this.navigateToCardDetailsViewPage()}>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>

                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/visa.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        {this.state.results[i].bank_card_number}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        {this.state.results[i].name_on_card}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        {this.state.results[i].expires_date}
                                    </Text>
                                    <View
                                        style={{
                                        marginLeft: 20,
                                        marginTop: 5,
                                        flexDirection: 'row'
                                    }}>
                                        <View>
                                            {defaultIcon}
                                        </View>
                                        <Text style={styles.cardDefaultText}>
                                            IsDefault:{this.state.results[i].default}
                                        </Text>
                                    </View>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>                
            )
        }
        const defaultIcon = <FaIcons name="first-order" size={20} color="white"/>;
        
        return (
            <View style={mainstyles.main}>
                <ScrollView style={styles.card}>
                {cards}
                </ScrollView>

                <View
                    style={{
                    marginLeft: 5,
                    marginRight: 5
                }}>
                    <Button
                        onPress={() => this.navigateToAddCardPage()}
                        style={{
                        container: {
                            height: 45
                        }
                    }}
                        raised
                        primary
                        text="Add Card"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: '92%',
        alignSelf: 'stretch',
        margin: 5,
        marginBottom: 10,
        borderWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent'
    },
    cardTitle: {
        fontSize: 18,
        color: 'white'
    },

    cardText: {
        fontSize: 10,
        color: 'white',
        marginTop: 5,
        marginLeft: 20
    },

    cardDefaultText: {
        fontSize: 10,
        color: 'white',
        marginLeft: 20
    },

    cardImage: {
        height: 65,
        width: 100
    },
    cardItem: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 5,
        height: 85,
        marginBottom: 10
    },
    cardBody: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    }
});

const ListOfCardsViewStack = createStackNavigator({

    ListOfCardsView: {
        screen: ListOfCardsView,

        navigationOptions: ({navigation}) => ({
            headerTitle: "Your Cards", headerLeft: <View>
                <TouchableOpacity
                    onPress={() => {
                    navigation.toggleDrawer()
                }}><Icon name='menu' color='white' size={35} color='white'/></TouchableOpacity>
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
    ListOfCardsView: {
        screen: ListOfCardsViewStack
    },    
    CardDetailsView: {
        screen: CardDetailsView
    }
}, {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
})

export default DrawerStack