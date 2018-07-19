const global = {
  font: {
    light: "Roboto-Light",
    thin: "Roboto-Thin",
    regular: "Roboto-Regular"
  }
};
export default (theme = {
  darknight: {
    font: global.font,
    color: {
      primary: {
        base: "#1d1d25",
        light: "#34343B",
        dark: "#000000"
      },
      secondary: {
        base: "#8c88ff",
        light: "#c1b8ff",
        dark: "#575bcb"
      },
      textOnPrimary: "#ffffff",
      textOnSecondary: "#000000",
      textOnError: "#EB5757"
    },
    legend: {
      completed: {
        color: "#50D2C2",
        text: "Completed"
      },
      overdue: {
        color: "#FF3366",
        text: "Overdue"
      },
      snooze: {
        color: "#FCAB53",
        text: "Snooze"
      }
    },
    codeTheme: "darknight",
    chatBg: "#ffffff",
    newMessageSeparator: "#ff8800",
    linkColor: "#2389d7",
    dimensions: {
      small: 20,
      medium: 40,
      large: 60,
      xlarge: 100
    }
  },
  solar: {
    font: global.font,
    color: {
      primary: {
        base: "#1d1d26",
        light: "#44444e",
        dark: "#000000"
      },
      secondary: {
        base: "#f2c94c",
        light: "#fffc7d",
        dark: "#bc9914"
      },
      textOnPrimary: "#ffffff",
      textOnSecondary: "#000000",
      textOnError: "#EB5757",
      completed: "#50D2C2",
      overdue: "#FF3366",
      snooze: "#FCAB53"
    },
    codeTheme: "solar",
    chatBg: "#ffffff",
    newMessageSeparator: "#ff8800",
    linkColor: "#2389d7"
  }
});
