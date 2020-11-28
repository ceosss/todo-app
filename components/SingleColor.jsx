import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const SingleColor = ({ color, setSelectedColor, highlighted }) => {
  const ifHighlighted = () =>
    highlighted === color
      ? { borderColor: "#34495e", borderWidth: 1, backgroundColor: color }
      : { backgroundColor: color };
  return (
    <TouchableOpacity
      style={[styles.singleColor, ifHighlighted()]}
      onPress={() => setSelectedColor(color)}
    />
  );
};

export default SingleColor;

const styles = StyleSheet.create({
  singleColor: {
    width: 22,
    height: 22,
  },
});
