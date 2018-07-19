import { Navigation } from "react-native-navigation";
import registerScreen from "./app/config/registerScreens";
import setup from "./app/config/setup";
setup();
registerScreen();

// now you can use getIcon(name) to get a preloaded icon.
// just set buttons on constructor/will mount or fix the static navigatorButtons properties
Navigation.startSingleScreenApp({
  screen: {
    screen: "jot.LoginScreen"
  }
});
