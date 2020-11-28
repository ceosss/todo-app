import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-simple-toast";
import { useSelector } from "react-redux";
import firebase from "../firebase";

const TodoItem = ({ data, category, updateTodos }) => {
  const email = useSelector((state) => state.AuthReducer.user);
  const db = firebase.firestore();
  const todoRef = db
    .collection("users")
    .doc(email)
    .collection("categories")
    .doc(category.toLowerCase());
  const handlePress = () => updateTodos(data.id);
  const handleDelete = () => {
    todoRef
      .update({
        todo: firebase.firestore.FieldValue.arrayRemove({
          id: data.id,
          name: data.name,
          done: data.done,
        }),
      })
      .then(() => Toast.show("Deleted"))
      .catch((error) => Toast.show(error));
  };
  const doneText = () =>
    data.done ? { textDecorationLine: "line-through", color: "#fff" } : "";
  const doneTodo = () =>
    data.done
      ? { backgroundColor: "lightgreen" }
      : { backgroundColor: "#ff7979" };
  return (
    <View
      style={[styles.todoItem, doneTodo()]}
      // onPress={handlePress}
    >
      <View style={styles.done}>
        <TouchableOpacity onPress={handlePress}>
          <MaterialIcons name="done" size={18} color="black" />
        </TouchableOpacity>
        <Text style={[styles.todoItemName, doneText()]}>{data.name}</Text>
      </View>
      <TouchableOpacity style={styles.opacity} onPress={handleDelete}>
        <MaterialIcons name="delete" size={20} color="#2f3542" />
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
