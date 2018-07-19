import React from "react";
import { Text, StyleSheet } from "react-native";

export default (H3 = ({ title }) => {
  return <Text style={styles.title}> {title} </Text>;
});

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 20,
    color: "white",
    fontFamily: "Roboto-Light",
    textDecorationStyle: "dotted"
  }
});
