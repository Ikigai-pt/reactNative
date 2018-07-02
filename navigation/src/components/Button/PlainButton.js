import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default (PlainButton = ({ title, clickHandler }) => {
  return (
    <TouchableOpacity onPress={() => clickHandler()}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: "black",
    fontFamily: "Roboto-Light",
    padding: 16
  }
});
