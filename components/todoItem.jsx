import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getColor } from "../data";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ data }) => {
  const backColor = {
    backgroundColor: getColor(),
  };
  return (
    <View style={[styles.todoItem, backColor]}>
      <Text>{data.name}</Text>
      <TouchableOpacity style={styles.opacity}>
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    width: "90%",
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  opacity: {
    height: 20,
  },
});
