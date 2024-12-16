import {
    defineProperties,
  } from "@vanilla-extract/sprinkles";

export const colors = {
  "blue": "#3a5dae",
  "indigo": "#6610f2",
  "purple": "#6f42c1",
  "pink": "#e83e8c",
  "red": "#bf412e",
  "orange": "#fd7e14",
  "yellow": "#ffc107",
  "green": "#28a745",
  "teal": "#20c997",
  "cyan": "#17a2b8",
  "white": "#fff",
  "gray": "#6c757d",
  "grayDark": "#343a40",
  "grayLight": "#222",
  "primary": "#3a5dae",
  "success": "#28a745",
  "info": "#17a2b8",
  "warning": "#ffc107",
  "danger": "#bf412e",
  "light": "#00000080",
  "dark": "#1a1b1c",
  "muted": "#00000015",
  };
  
  export const colorProperties = defineProperties({
    conditions: {
      lightMode: {},
      darkMode: { "@media": "(prefers-color-scheme: dark)" }
    },
    defaultCondition: "lightMode",
    properties: {
      color: colors,
      background: colors
    }
  });