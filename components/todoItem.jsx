import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getColor } from "../data";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ data }) => {
  const handlePress = () => {
    console.log(data);
  };
  const handleDelete = () => {
    console.log(data);
  };
  return (
    <TouchableOpacity
      style={[styles.todoItem, { backgroundColor: getColor() }]}
      onPress={handlePress}
    >
      <Text style={styles.todoItemName}>{data.name}</Text>
      <TouchableOpacity style={styles.opacity} onPress={handleDelete}>
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
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
  todoItemName: {
    fontFamily: "Montserrat_300Light",
    fontWeight: "300",
  },
  opacity: {
    height: 20,
  },
});
