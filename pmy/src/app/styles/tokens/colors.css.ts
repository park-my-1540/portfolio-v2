import {
    defineProperties,
  } from "@vanilla-extract/sprinkles";

export const colors = {
    "blue-50": "#eff6ff",
    "blue-100": "#dbeafe",
    "blue-200": "#bfdbfe",
    "blue-500": "#083AFF",
    "blue-600": "#223DFF",
    "blue-700": "#3A5DAD",
    "gray-50": "rgba(26, 27, 28, .2)",
    "gray-100": "#f9f9f9",
    "gray-200": "#f2f2f2",
    "gray-300": "#F2F2F5",
    "gray-400": "#ececec",
    "gray-500": "#ccc",
    "gray-600": "#444",
    "gray-700": "#666",
    "gray-800": "#727272",
    "gray-900": "#999",
    'white': "#fff",
    "black-100": "#211B1B",
    "black-200": "#231F20",
    "white-100": "#eee",
    "black-600": "#212023",
    "black-700": "#1A1B1C47",
    "orange": "#FF8000",
    "purple-100": "#7A30CF",
    "purple": "#4C1F7A",
    "mint": "#219B9D",

    // etc.
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