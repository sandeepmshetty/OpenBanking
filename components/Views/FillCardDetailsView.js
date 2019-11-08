import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body} from "native-base";
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-material-ui';
import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class FillCardDetailsView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const creditCardIcon = <Icon name="credit-card" size={20} color="white"/>;
        const locationIcon = <Icon name="location-on" size={20} color="white"/>;
        const visaIcon = <FaIcons name="cc-visa" size={30} color="white"/>;

        return (
            <View>
                <View>
                    <Text style={styles.wordBold}>Add credit card or debit card</Text>
                </View>
                <View>
                    <Text style={styles.gop_info_text}>
                        Please make sure cardholder name and other information is exactly as it
                        appears on card</Text>
                </View>
                <ScrollView
                    style={{
                    backgroundColor: '#DF6263',
                    height: '82%',
                    margin: 10,
                    padding: 10,
                    overflowY: 'auto',
                    paddingTop: 0,
                    borderRadius: 3
                }}>
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <View
                            style={{
                            flex: 1,
                            marginTop: 35,
                            marginRight: -10
                        }}>
                            {creditCardIcon}
                        </View>
                        <View
                            style={{
                            flexDirection: 'row',
                            flex: 9,
                            marginTop: 0
                        }}>
                            <View
                                style={{
                                flex: 10,
                                marginTop: 0
                            }}>
                                <TextField label='Card number' keyboardType='phone-pad'/>
                            </View>
                            <View
                                style={{
                                flex: 1.5,
                                marginTop: 30
                            }}>
                                {visaIcon}
                            </View>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 4,
                            marginTop: 0
                        }}>
                            <TextField label='MM/YY'/>
                        </View>
                        <View
                            style={{
                            flex: 1,
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 4,
                            marginTop: 0
                        }}>
                            <TextField label='CVC'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}>{locationIcon}</View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Name'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Country'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Street address'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Apt./Suite'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='City/Town'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Postal Code'/>
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
                            marginTop: 35,
                            marginRight: -10
                        }}></View>
                        <View
                            style={{
                            flex: 10,
                            marginTop: 0
                        }}>
                            <TextField label='Phone Number'/>
                        </View>
                    </View>
                </ScrollView>
                <View style={{marginLeft:10, marginRight:10}} >
                      <Button raised primary text="Save" />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wordBold: {
        fontFamily: "Roboto",
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    gop_info_text: {
        fontFamily: "Roboto",
        color: 'lightgray',
        textAlign: 'center',
        fontSize: 15,
        marginLeft:10,
        marginRight:10
    }
});

export default FillCardDetailsView;