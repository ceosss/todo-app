import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ data, deleteTodo }) => {
  const backColor = {
    backgroundColor: getColor(),
  };
  return (
    <View style={[styles.todoItem, backColor]}>
      <Text>{data.name}</Text>
      <TouchableOpacity
        onPress={() => deleteTodo(data.id)}
        style={styles.opacity}
      >
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const getColor = () => {
  const colors = [
    "#FEBCC8",
    "#FFFFD8",
    "#EAEBFF",
    "#E0FEFE",
    "#D3EEFF",
    "#EFB0C9",
    "#F4C2D7",
    "#F8DAE9",
    "#B9D6F3",
    "#A1C9F1",
    "#F1E8D9",
  ];
  const random = Math.floor(Math.random() * colors.length);

  return colors[random];
};

const styles = StyleSheet.create({
  todoItem: {
    width: "47%",
    height: 250,
    padding: 15,
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    elevation: 1,
    // backgroundColor: getColor(),
    // borderColor: "#ccc",
    // borderWidth: 1,
  },
  opacity: {
    height: 20,
  },
});
