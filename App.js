import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calories, Serving, Clock } from "./icons";

const Piece = ({ icon, children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      {icon}
      <Text
        style={{
          marginLeft: 10,
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <View style={styles.whiteWrap}>
        <Piece icon={<Clock />}>30 min</Piece>
        <Piece icon={<Serving />}>6 servings</Piece>
        <Piece icon={<Calories />}>210 calories</Piece>
      </View>

      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1E8E6",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
  whiteWrap: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#F55951",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
