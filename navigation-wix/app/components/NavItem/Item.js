import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { makeStyleFromTheme } from "../../util/theme_utils";

export default (Item = ({ content }) => {
  const styles = createStyleSheet("darknight");
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.text}> {content} </Text>
      </View>
      <View style={styles.pole} />
    </View>
  );
});

const createStyleSheet = makeStyleFromTheme(theme => {
  return {
    container: {
      flex: 1,
      flexDirection: "row"
    },
    nav: {
      flex: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.primary.light,
      elevation: 5,
      zIndex: -1
    },
    text: {
      color: theme.color.textOnPrimary,
      textAlign: "center"
    },
    pole: {
      flex: 1,
      backgroundColor: theme.color.secondary.base
    }
  };
});
