import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (H1 = ({ title }) => {
  return <Text style={styles.title}> {title} </Text>;
});

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: "black",
    fontFamily: "Roboto-Thin"
  }
});
