import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/BotScreen";
import LoginScreen from "../screens/LoginScreen";

const MainStackNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Chat: {
      screen: ChatScreen
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#F2C94C",
      inactiveTintColor: "black",
      showLabel: false,
      tabStyle: { backgroundColor: "black" }
    }
  }
);

const WelcomeStackNavigator = createBottomTabNavigator(
  {
    Auth: {
      screen: LoginScreen
    },
    Main: {
      screen: MainStackNavigator
    }
  },
  {
    initialRouteName: "Auth",
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

export { WelcomeStackNavigator };
