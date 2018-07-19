import React from "react";
import { View, Text } from "react-native";

import { Square } from "../simple/index";
import { makeStyleFromTheme, getCurrentTheme } from "../../util/theme_utils";

const ScoreCard = ({ score, legend, legendSize }) => {
  const styles = createStyleSheet("darknight");
  const theme = getCurrentTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.score}> {score}</Text>
      <View style={styles.legend}>
        <Square color={theme.legend[legend].color} size={legendSize} />
        <Text style={styles.text}> {theme.legend[legend].text} </Text>
      </View>
    </View>
  );
};

const createStyleSheet = makeStyleFromTheme(theme => {
  return {
    container: {
      flex: 1,
      alignItems: "center"
    },
    score: {
      fontSize: 40,
      color: theme.color.textOnPrimary,
      fontFamily: theme.font.thin
    },
    legend: {
      flexDirection: "row",
      alignItems: "center"
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      fontFamily: theme.font.thin,
      color: theme.color.textOnPrimary
    }
  };
});

export default ScoreCard;
