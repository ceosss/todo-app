import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ addTodo, toggleShowTodoInput }) => {
  const [todo, setTodo] = useState("");
  const handleButtonPress = () => {
    if (todo.length > 3) {
      addTodo({
        name: todo,
        done: false,
        id: uuidv4(),
      });
      toggleShowTodoInput(false);
      setTodo("");
    } else {
      // setVisible(true);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.inputContainer}>
      <Text style={styles.heading}>ADD A TODO</Text>
      <TextInput
        placeholder="Todo"
        style={styles.input}
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  inputContainer: {
    // margin: 30,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "yellowgreen",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
});
