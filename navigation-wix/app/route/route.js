import { Navigation } from "react-native-navigation";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/BotScreen";
import LoginScreen from "../screens/LoginScreen";
import PlanScreen from "../screens/PlanScreen";

// Register Screens
Navigation.registerComponent("jot.AuthScreen", () => LoginScreen);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "job.AuthScreen",
    title: "Login"
  }
});
