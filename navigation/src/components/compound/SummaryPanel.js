import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScoreCard from "./ScoreCard";

const SummaryPanel = () => {
  return (
    <View style={styles.summary}>
      <ScoreCard score={"08"} legend={"completed"} legendSize={20} />
      <ScoreCard score={"02"} legend={"snooze"} legendSize={20} />
      <ScoreCard score={"04"} legend={"overdue"} legendSize={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  summary: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    margin: "5%"
  }
});

export default SummaryPanel;
