import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/auth.actions";
import { auth } from "../firebase";
import { validateEmail, validatePassword } from "../helper";
import Toast from "react-native-simple-toast";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (!validateEmail(email)) return Toast.show("Invalid Email");

    if (!validatePassword(password))
      return Toast.show(
        "Password must contain min 8 letters, with at least a symbol, upper and lower case letters and a number"
      );
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // console.log("id", email);
        dispatch(login(user.email));
        Toast.show("Login Successful");
        setLoading(false);
      })
      .catch((error) => {
        Toast.show(error.message);
        setLoading(false);
      });
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/4086940.jpg")}
    >
      <View style={styles.head}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.headerText}>LOGIN</Text>
          <View style={styles.inputHolder}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              placeholder="abc@xyz.com"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCompleteType="off"
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
              autoCompleteType="off"
            />
          </View>
        </View>
        {loading ? (
          <ActivityIndicator
            size="small"
            color="white"
            style={{ padding: 24 }}
          />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default Login;

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
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    color: "#2c3e50",
  },
});
