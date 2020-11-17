import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ data }) => {
  const handlePress = () => {
    console.log(data);
  };
  const handleDelete = () => {
    console.log(data);
  };
  const doneText = () =>
    data.done
      ? { textDecorationLine: "line-through", color: "lightgreen" }
      : "";
  const doneTodo = () => (data.done ? { backgroundColor: "#eee" } : "");
  return (
    <TouchableOpacity
      style={[styles.todoItem, doneTodo()]}
      onPress={handlePress}
    >
      <View style={styles.done}>
        <TouchableOpacity>
          <MaterialIcons name="done" size={18} color="black" />
        </TouchableOpacity>
        <Text style={[styles.todoItemName, doneText()]}>{data.name}</Text>
      </View>
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
    backgroundColor: "white",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  done: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoItemName: {
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    marginLeft: 5,
    color: "#333",
  },
  opacity: {
    height: 20,
  },
});
