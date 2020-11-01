import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Snackbar } from "react-native-paper";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(false);
  const handleButtonPress = () => {
    if (todo.length > 3) {
      addTodo({
        name: todo,
        done: false,
        id: uuidv4(),
      });
      setTodo("");
    } else {
      // setVisible(true);
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Todo"
        style={styles.input}
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="Add Todo" onPress={handleButtonPress} />
      <Snackbar
        // visible={todo.length > 0 && todo.length < 4}
        onDismiss={() => setVisible(false)}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
        style={{ backgroundColor: "blue" }}
      >
        <View>
          <Text>Todo must contain atleast 4 Character.</Text>
        </View>
      </Snackbar>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  inputContainer: {
    margin: 30,
    // flex: 1,
  },
});
