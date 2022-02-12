import React, { Component } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.15398,
            longitude: -95.992775,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Marker
          coordinates={{
            latitude: 36.15398,
            longitude: -95.992775,
          }}
          pinColor="black"
        >
          <Callout>
            <Text> I am here</Text>
          </Callout>
        </Marker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
