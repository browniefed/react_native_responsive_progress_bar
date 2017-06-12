import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";

export default class rn_progress_bars extends Component {
  state = {
    progress: 0,
  };
  componentDidMount() {
    // setInterval(() => {
    //   this.setState(state => ({
    //     progress: state.progress + 0.1,
    //   }));
    // }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250,
  },
});

AppRegistry.registerComponent("rn_progress_bars", () => rn_progress_bars);
