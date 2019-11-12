import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground
                    source={require('../assets/bg_gradient.png')}
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}></ImageBackground>
                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}>
                    <View
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Image source={require('../assets/icon.png')} style={styles.image}/>

                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#eee'

    },

    secondContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000'
    },

    image: {
        marginBottom: 20,
        height: 250,
        width: 250
    }
});
