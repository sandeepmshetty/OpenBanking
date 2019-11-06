import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-material-ui';

class AddCardsView extends Component {

    constructor(props) {
      super(props)
    }
  
    render() {  
      return (<View>
                    <View>
                         <Text style={styles.wordBold}>Lets add a Payment Card</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 50}}>
                      <Image source={require('../../assets/add_card.jpg')} style={styles.image} />
                    </View>
                    <View>
                      <Button style={{height:45}} raised primary text="Add Card" />
                    </View>
              </View>)
    }
}

const styles = StyleSheet.create({
                 wordBold: {
                       fontWeight: 'bold',
                       color: 'white',
                       textAlign: 'center',
                       fontSize:20
                    },
                    image: {
                      marginBottom: 20,
                      marginTop: 20,
                      height: 620,
                      width: '98%'
                    },
                 });

export default AddCardsView;