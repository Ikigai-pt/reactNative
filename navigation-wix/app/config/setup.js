import { Navigation } from "react-native-navigation";
import { loadIcons } from "./icons";
import App from "../App";

export default function setup() {
  var tasks = [
    // other async tasks/promises
    loadIcons(["md-list", "md-chatboxes"])
  ];
  Promise.all(tasks).then(new App());
}
