import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Splash from './components/Splash';
import Login from './components/LoginScreen';
import { View } from 'native-base';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true
    this.state = {
      timePassed: false,
    };
  }

  render() {
    let mainWrapper = <View></View>;
    var mainScreen = <Splash />

    setTimeout(() => { this.setState({ timePassed: true }) }, 3000)

    if (!this.state.timePassed) {

      return <View style={styles.mainContainer}>{mainScreen}</View>

    } else {
      mainScreen = <View style={styles.mainContainer}><Login /></View>
    }
    return mainScreen

  }

}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#083261',
    flex: 1,
  }
});




AppRegistry.registerComponent("rn-sample-drawer-app", () => App)