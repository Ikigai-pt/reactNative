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
import startMainTab from "./Main/startMainTabs";

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
      <View style={styles.socialLogin}>
        <PlainButton
          title="Sign in with Facebook"
          clickHandler={() => startMainTab()}
        />
        <PlainButton
          title="Sign in with Google"
          clickHandler={() => startMainTab()}
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
            <View style={styles.registerPanel}>
              <H3 title="SIGN IN" />
              <H3 title="SIGN UP" />
            </View>
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
    backgroundColor: "#34343B",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    position: "relative",
    height: "100%"
  },
  logoStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "75%"
  },
  registerPanel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#8c88ff",
    padding: 10,
    width: "100%"
  },
  socialLogin: {
    flex: 1,
    marginTop: "-100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D25",
    zIndex: -1
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center"
//   },
//   logoContainer: {
//     flexDirection: "column",
//     backgroundColor: "#34343B",
//     justifyContent: "space-between",
//     alignItems: "center",
//     elevation: 5,
//     height: "100%"
//   },
//   subHeadingStyle: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: "-15%"
//   },
//   logoStyle: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "75%"
//   },
//   registerPanel: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     backgroundColor: "#8c88ff",
//     padding: 10,
//     width: "100%"
//   },
//   socialLogin: {
//     flex: 1,
//     marginTop: "-100%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#1D1D25",
//     zIndex: -1
//   },
//   signUpPanel: {
//     flex: 1,
//     marginTop: "-100%",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: -1
//   }
// });

export default LoginScreen;
