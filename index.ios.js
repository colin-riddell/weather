import React from 'react';
// API Key for openweathermap.org:
// a3edeb38bcf33d1e1780546f59336f0d
import {
  AppRegistry,
  MapView,
  View,
  StyleSheet,
  Text
} from 'react-native'

var Api = require('./src/api')

var Weather = React.createClass({
  getInitialState: function(){
    return {
      pin : {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperature: '',
      description: ''
    }
  },
  render: function(){

    return <View style={styles.container}>
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>
      </MapView>
      <View style={styles.textWrapper}>
        <Text style={styles.text}> {this.state.city} </Text>
        <Text style={styles.text}> {this.state.temperature} </Text>
        <Text style={styles.text}> {this.state.description} </Text>


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

    Api(region.latitude, region.longitude).then((data) => {
        console.log(data)
        this.setState(data)
      });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    justifyContent: 'center', // ensure centered
    alignItems: 'stretch', // Parent child take as much space as possible (far left to far right)
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
