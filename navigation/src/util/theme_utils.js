import THEME from "../style/theme";

const makeStyleFromTheme = getStyleFromTheme => {
  let lastThemeName = null;
  let style = null;

  return themeName => {
    if (!style || themeName !== lastThemeName) {
      const currentTheme = THEME[themeName];
      style = getStyleFromTheme(currentTheme);
      lastTheme = themeName;
    }

    return style;
  };
};
const getCurrentTheme = (themeName = "darknight") => {
  return THEME[themeName];
};

export { makeStyleFromTheme, getCurrentTheme };
