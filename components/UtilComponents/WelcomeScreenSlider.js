import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './SliderEntry.style';

export default class WelcomeScreenSlider extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    render() {
        const {
            data: {
                slideText,
                slideSubText,
                logo
            },
            even
        } = this.props;

        return (
            <TouchableOpacity activeOpacity={1} style={localstyles.slideInnerContainer}>
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
                    source={logo}>
                   {/*<View
                        style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Text
                            style={{
                            marginLeft: 30,
                            marginTop: 30,
                            fontSize: 25
                        }}>{slideText}</Text>
                    </View>*/}
                    
                    </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.80;
const slideWidth = wp(90);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin *2;

const localstyles = StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    }
});