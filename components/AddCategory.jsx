import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Toast from "react-native-simple-toast";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../data";
import SingleColor from "./SingleColor";
import firebase from "../firebase";
import { useSelector } from "react-redux";

const AddCategory = ({ toggle }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [text, setText] = useState("");
  const email = useSelector((state) => state.AuthReducer.user);
  const db = firebase.firestore();
  const addCategory = () => {
    if (text.length < 3)
      return Toast.show("Category Name must be atleast 3 characters long");

    db.collection("users")
      .doc(email)
      .collection("categories")
      .doc(text.toLowerCase())
      .set({
        category: text,
        color: selectedColor,
        todo: [],
      })
      .then(() => {
        Toast.show("New Category Created");
        toggle(false);
      })
      .catch((error) => Toast.show(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ADD CATEGORY</Text>
      <View style={styles.colorContainer}>
        {colors.map((color) => (
          <SingleColor
            color={color}
            setSelectedColor={setSelectedColor}
            key={color}
            highlighted={selectedColor}
          />
        ))}
      </View>
      <TextInput
        placeholder="Category Name"
        style={[
          styles.input,
          { borderColor: selectedColor, color: selectedColor },
        ]}
        value={text}
        onChangeText={(text) => setText(text)}
        maxLength={10}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: selectedColor }]}
        onPress={addCategory}
      >
        <Text style={styles.text}>SUBMIT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cross}>
        <AntDesign
          name="close"
          size={24}
          color="black"
          onPress={() => toggle(false)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    marginBottom: 30,
    letterSpacing: 1,
    color: "#2c3e50",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderRadius: 8,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  button: {
    width: "80%",
    // borderColor: "#2c3e50",
    // borderWidth: 1,
    paddingVertical: 14,
    marginTop: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  cross: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  colorContainer: {
    width: "78%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
