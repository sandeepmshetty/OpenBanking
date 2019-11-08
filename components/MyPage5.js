import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import CardDetailsView from './Views/CardDetailsView';
class MyPage5 extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee',}}>
            <ImageBackground
                source={require('../assets/bg_gradient.png')}
                style={{
                padding: 10,
                paddingTop:0,
                borderRadius: 5
              }}>
                <View style={styles.container}>
                    <CardDetailsView/>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        margin: 30,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    }

});


export default Page5Stack = createStackNavigator({

    MyPage5: {
        screen: MyPage5,
        navigationOptions: ({ navigation }) => ({
            headerTitle: "My Page 5",
            headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
        })
    },

});