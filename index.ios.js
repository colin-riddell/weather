import React from 'react';

import {
  AppRegistry,
  MapView,
  View,
  StyleSheet,
  Text
} from 'react-native'


var Weather = React.createClass({
  getInitialState: function(){
    return {
      pin : {
        latitude: 0,
        longitude: 0
      }
    }
  },
  render: function(){

    return <View style={styles.container}>
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>
      </MapView>
      <View style={styles.buttonBox}>
        <Text> waa </Text>
      </View>
    </View>
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch' // Parent child take as much space as possible (far left to far right)
  },
  map: {
    flex: 3
  },
  buttonBox: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
