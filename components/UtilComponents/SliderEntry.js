import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    render() {
        const {
            data: {
                cardType,
                cardHolderName,
                cardNumber,
                logo,
                bankName,
                isAddCard,
                subtitle
            },
            even
        } = this.props;

        const imageurl = isAddCard ? require('../../assets/add-card.png') : require('../../assets/mastercard.jpg');

        return (
            <View
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this.navigateToAddCardPage()}>
                <View style={styles.shadow}/>
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
                    source={imageurl}>
                    {!isAddCard
                        ? (
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
                                }}>{cardType}</Text>
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
                        )
                        : null}
                    {!isAddCard
                        ? (
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
                                    <Text
                                        style={{
                                        fontSize: 17
                                    }}>&bull; &bull; &bull; &bull; {cardNumber}</Text>
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
                                        source={logo}
                                        resizeMode='contain'
                                        style={{
                                        height: 100,
                                        width: 80
                                    }}/>
                                </View>
                            </View>
                        )
                        : null}
                </ImageBackground>
            </View>
        );
    }
}