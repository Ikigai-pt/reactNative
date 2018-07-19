import React from "react";
import { View, StyleSheet } from "react-native";

const Square = ({ color, size }) => {
  return (
    <View
      style={[
        ...styles.container,
        { width: size, height: size, backgroundColor: color }
      ]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Square;
