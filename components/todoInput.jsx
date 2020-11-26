import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toast from "react-native-simple-toast";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import "react-native-get-random-values";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ category }) => {
  const [todo, setTodo] = useState("");
  const db = firebase.firestore();
  const email = useSelector((state) => state.AuthReducer.user);
  const handleButtonPress = () => {
    if (todo.length > 3) {
      db.collection("users")
        .doc(email)
        .collection("categories")
        .doc(category.toLowerCase())
        .update({
          todo: firebase.firestore.FieldValue.arrayUnion({
            name: todo,
            id: uuidv4(),
            done: false,
          }),
        })
        .then(() => Toast.show(`${todo} Added to ${category}`))
        .catch((error) => Toast.show(error));
      setTodo("");
    } else {
      Toast.show("Todo Must be atleast 3 characters long.");
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Todo"
          style={styles.input}
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <TouchableOpacity
          onPress={handleButtonPress}
          style={styles.buttonHolder}
        >
          {/* <Text>Add Todo</Text> */}
          <Entypo name="plus" size={24} color="#333" style={styles.button} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: "75%",
    alignItems: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  buttonHolder: {
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "lightgreen",
    padding: 12,
    marginLeft: 5,
    borderRadius: 8,
  },
});
