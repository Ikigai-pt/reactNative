import { Navigation } from "react-native-navigation";
import { registerScreens, startScreen } from "./config/registerScreens";

export default class App {
  constructor() {
    // now you can use getIcon(name) to get a preloaded icon.
    // just set buttos on constructor/will mount or fix the static navigatorButtons properties
    registerScreens();
    Navigation.startSingleScreenApp(startScreen);
  }
}
