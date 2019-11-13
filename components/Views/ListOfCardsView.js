import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class ListOfCardsView extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const defaultIcon = <FaIcons name="first-order" size={20} color="white"/>;

        return (
            <View>
                <ScrollView style={styles.card}>
                    <TouchableOpacity>
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
                                        Visa &bull; &bull; &bull; &bull; 6408
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
                                            Default
                                        </Text>
                                    </View>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>
                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/discover.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Discover &bull; &bull; &bull; &bull; 7805
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/maestro.jpg')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Maestro &bull; &bull; &bull; &bull; 9507
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/master.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Master &bull; &bull; &bull; &bull; 5478
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                                        Visa &bull; &bull; &bull; &bull; 6408
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/discover.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Discover &bull; &bull; &bull; &bull; 7805
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/maestro.jpg')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Maestro &bull; &bull; &bull; &bull; 9507
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/master.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Master &bull; &bull; &bull; &bull; 5478
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                                        Visa &bull; &bull; &bull; &bull; 6408
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>
                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/discover.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Discover &bull; &bull; &bull; &bull; 7805
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/maestro.jpg')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Maestro &bull; &bull; &bull; &bull; 9507
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground
                            style={styles.cardItem}
                            source={require('../../assets/bg_gradient.png')}>

                            <Body style={styles.cardBody}>
                                <View
                                    style={{
                                    flex: 3.5
                                }}>
                                    <Image source={require('../../assets/master.png')} style={styles.cardImage}/>
                                </View>
                                <View
                                    style={{
                                    flex: 9
                                }}>
                                    <Text style={styles.cardText}>
                                        Master &bull; &bull; &bull; &bull; 5478
                                    </Text>
                                </View>

                            </Body>

                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>

                <View
                    style={{
                    marginLeft: 5,
                    marginRight: 5
                }}>
                    <Button  style={{
            container: {
              height: 45
            }
          }} raised primary text="Add Card"/>
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
        fontSize: 18,
        color: 'white',
        marginTop: 5,
        marginLeft: 20
    },

    cardDefaultText: {
        fontSize: 16,
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

export default ListOfCardsView;