import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
// import { ListView } from "../components/index";
import { makeStyleFromTheme } from "../util/theme_utils";
import { SummaryPanel, NavBar } from "../components/compound/index";

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: null,
    tabBarIcon: ({ focused }) => (
      <Icon name={focused ? "md-list" : "md-list"} size={30} color="white" />
    )
  };

  render() {
    const styles = createStyleSheet("darknight");
    return (
      <View style={styles.container}>
        <NavBar />
        <SummaryPanel />
        <View style={styles.items}>
          <Text> Items </Text>
        </View>
      </View>
    );
  }
}

const createStyleSheet = makeStyleFromTheme(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.color.primary.base
    },
    items: {
      flex: 7
    }
  };
});

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: task => dispatch(addTask(task))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);
