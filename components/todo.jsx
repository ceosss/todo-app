import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { name: "Eat", done: false, id: "1" },
    { name: "Code", done: false, id: "2" },
    { name: "Sleep", done: false, id: "3" },
  ]);
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const addTodo = (data) => setTodos([data, ...todos]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <TodoInput addTodo={addTodo} />
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem data={item} deleteTodo={deleteTodo} />
          )}
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
