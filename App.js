import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";

import Navigator from "./Navigator";

export default function App() {
  const { height } = useWindowDimensions();

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
