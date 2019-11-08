import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
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
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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
                                        marginLeft: 10,
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CardItem style={styles.cardItem}>

                            <Body
                                style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: -5,
                                marginLeft: -10
                            }}>
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

                        </CardItem>
                    </TouchableOpacity>
                </ScrollView>

                <View style={{
                      marginLeft: 5,
                      marginRight: 5
                    }}>
                    <Button
                      
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
        height: '93%',
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
        backgroundColor: '#5073b2',
        borderRadius: 5,
        padding: 0,
        marginBottom: 5
    }
});

export default ListOfCardsView;