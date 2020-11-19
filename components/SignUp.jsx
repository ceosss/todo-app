import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { validateName, validateEmail, validatePassword } from "../helper";
import Toast from "react-native-simple-toast";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    if (!validateName(name))
      return Toast.show("Name must contain atleast 4 characters");
    if (!validateEmail(email)) return Toast.show("Invalid Email");

    if (!validatePassword(password))
      return Toast.show(
        "Password must contain min 8 letters, with at least a symbol, upper and lower case letters and a number"
      );
    Toast.show("Ready to Login");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.headerText}>SIGN-UP</Text>
          <View style={styles.inputHolder}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              placeholder="John Doe"
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputHolder}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              placeholder="abc@xyz.com"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputHolder}>
            <MaterialCommunityIcons
              name="textbox-password"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Abcd@1234"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { backgroundColor: "orange", height: "100%" },
  head: { height: "30%", justifyContent: "center", alignItems: "center" },
  headerText: {
    fontSize: 32,
    marginVertical: 10,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    color: "white",
  },
  body: { height: "70%", justifyContent: "center", alignItems: "center" },
  form: { width: "75%", justifyContent: "center", alignItems: "center" },
  inputHolder: {
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    padding: 8,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  input: { width: "100%", marginLeft: 5 },
  button: {
    padding: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "75%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    color: "white",
  },
});
