import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import AuthScreen from "../screens/Auth/AuthScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BotScreen from "../screens/BotScreen";
import PlanScreen from "../screens/PlanScreen";
import configStore from "../store/store";

const store = configStore();

const registerScreens = () => {
  // Register Screens
  Navigation.registerComponent("jot.AuthScreen", () => AuthScreen);
  Navigation.registerComponent("jot.LoginScreen", () => LoginScreen);
  Navigation.registerComponent(
    "jot.HomeScreen",
    () => HomeScreen,
    store,
    Provider
  );
  Navigation.registerComponent("jot.BotScreen", () => BotScreen);
  Navigation.registerComponent("jot.PlanScreen", () => PlanScreen);
};

const startScreen = {
  screen: {
    screen: "jot.LoginScreen",
    title: null
  }
};

export { registerScreens, startScreen };
