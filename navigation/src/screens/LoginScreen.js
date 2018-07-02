import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { PlainButton, H1, H3 } from "../components";

const { width, height } = Dimensions.get("window");

class LoginScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
    header: null,
    headerTitle: null
  };

  state = {
    slide: new Animated.ValueXY(0)
  };

  componentDidMount() {
    Animated.timing(this.state.slide.y, {
      toValue: -(height * 0.25),
      delay: 400,
      duration: 1000,
      easing: Easing.in(Easing.bounce)
    }).start();
  }

  render() {
    const moveStyle = {
      transform: [
        { translateX: this.state.slide.x },
        { translateY: this.state.slide.y }
      ]
    };
    const renderSignUpPanel = (
      <View style={styles.signUpPanel}>
        <PlainButton
          title="Sign in with Facebook"
          clickHandler={() => this.props.navigation.navigate("Main")}
        />
        <PlainButton
          title="Sign in with Google"
          clickHandler={() => this.props.navigation.navigate("Main")}
        />
      </View>
    );

    return (
      <View style={styles.container}>
        <Animated.View style={[moveStyle]}>
          <View style={styles.logoContainer}>
            <View style={styles.logoStyle}>
              <Icon
                name="ios-list"
                size={80}
                color="black"
                style={{ padding: 10 }}
              />
              <H1 title="J o t" />
            </View>
            <H3 title="Plan . Execute . Habit " />
            <H3 title="Sign up" />
          </View>
        </Animated.View>
        {renderSignUpPanel}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  logoContainer: {
    flexDirection: "column",
    backgroundColor: "#F2C94C",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    position: "relative",
    height: "100%"
  },
  logoStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpPanel: {
    flex: 1,
    marginTop: "-100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1
  }
});

export default LoginScreen;
