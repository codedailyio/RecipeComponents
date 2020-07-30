import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Badge = ({ children, selected }) => {
  return (
    <View style={[styles.badge, selected && styles.selected]}>
      <Text style={[styles.badgeText, selected && styles.selectedText]}>
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
        <Text style={styles.title}>Difficulty</Text>
        <View style={styles.badgeRow}>
          <Badge>Easy</Badge>
          <View style={{ paddingHorizontal: 10 }}>
            <Badge selected>Medium</Badge>
          </View>
          <Badge>Hard</Badge>
        </View>
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 18,
    color: "#111127",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  badge: {
    backgroundColor: "#FAF2F0",
    borderWidth: 1,
    borderColor: "#EDD2CB",
    borderStyle: "solid",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  badgeText: {
    color: "#111127",
  },
  selected: {
    backgroundColor: "#F55951",
    shadowColor: "#F55951",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderColor: "#F55951",
  },
  selectedText: {
    color: "#FFF",
  },
});
