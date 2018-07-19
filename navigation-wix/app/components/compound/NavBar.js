import React, { Component } from "react";
import { View, Text } from "react-native";

import { makeStyleFromTheme, getCurrentTheme } from "../../util/theme_utils";
import { NavItem } from "../index";

const NavBar = () => {
  const styles = createStyleSheet("darknight");
  return (
    <View style={styles.container}>
      <NavItem content={"Mar 12th"} />
      <View style={styles.empty} />
      <NavItem content={"Add"} />
    </View>
  );
};

const createStyleSheet = makeStyleFromTheme(theme => {
  return {
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "4%",
      backgroundColor: theme.color.primary.base
    },
    text: {
      color: theme.color.textOnSecondary
    },
    empty: {
      flex: 2,
      backgroundColor: theme.color.primary.base
    }
  };
});

export default NavBar;
