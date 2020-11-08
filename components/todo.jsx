import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { name: "Eat", done: false, id: "1" },
    { name: "Code", done: false, id: "2" },
    { name: "Sleep", done: false, id: "3" },
  ]);
  const [showTodoInput, toggleShowTodoInput] = useState(false);
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const addTodo = (data) => setTodos([data, ...todos]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <TouchableOpacity
        style={styles.iconHolder}
        onPress={() => toggleShowTodoInput(true)}
      >
        <AntDesign name="plus" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Modal
        visible={showTodoInput}
        animationType="slide"
        onRequestClose={() => toggleShowTodoInput(false)}
      >
        <TodoInput
          addTodo={addTodo}
          toggleShowTodoInput={toggleShowTodoInput}
        />
      </Modal>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem data={item} deleteTodo={deleteTodo} />
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: "5%",
    paddingTop: "10%",
    backgroundColor: "lightgray",
  },
  iconHolder: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  icon: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
