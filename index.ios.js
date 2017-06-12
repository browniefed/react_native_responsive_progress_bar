import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";

class ProgressBar extends Component {
  
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }
  
  
  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
      row
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return (
      <View style={[{flexDirection: "row", height }, row ? { flex: 1} : undefined ]}>
        <View style={{ flex: 1, borderColor, borderWidth, borderRadius}}>
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: barColor
            }}
          />
        </View>
      </View>
    )
  }
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#000",
  borderWidth: 2,
  borderRadius: 4,
  barColor: "tomato",
  fillColor: "rgba(0,0,0,.5)",
  duration: 100
}

export default class rn_progress_bars extends Component {
  state = {
    progress: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        progress: state.progress + 0.1,
      }));
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <Text>Load progress:</Text>
          <ProgressBar
            row
            progress={this.state.progress}
            duration={500}
          />
          <Text>100%</Text>
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
  progressContainer: {
    alignItems: "center", 
    flexDirection: "row"
  }
});

AppRegistry.registerComponent("rn_progress_bars", () => rn_progress_bars);
