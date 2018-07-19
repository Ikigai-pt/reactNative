import { Navigation } from "react-native-navigation";
import { getIcon } from "../../config/icons";

const startMainTab = async () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "jot.HomeScreen",
        label: "Home",
        title: "Home",
        icon: getIcon("md-list")
      },
      {
        screen: "jot.PlanScreen",
        label: "Plan",
        title: "Plan",
        icon: getIcon("md-list")
      },
      {
        screen: "jot.BotScreen",
        label: "Bot",
        title: "Bot",
        icon: getIcon("md-chatboxes")
      }
    ]
  });
};

export default startMainTab;
