import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ data, deleteTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Text>{data.name}</Text>
      <TouchableOpacity onPress={() => deleteTodo(data.id)}>
        <AntDesign name="delete" size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    padding: 15,
    borderColor: "#ccc",
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
