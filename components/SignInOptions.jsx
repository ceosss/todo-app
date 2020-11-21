import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../assets/Logo";

const SignInOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInOptions;

const styles = StyleSheet.create({
  container: { backgroundColor: "orange", height: "100%" },
  head: { height: "30%", justifyContent: "center", alignItems: "center" },
  headerText: {
    fontSize: 32,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    color: "white",
  },
  body: { height: "70%", justifyContent: "center", alignItems: "center" },
  logo: {
    marginBottom: 30,
  },
  button: {
    padding: 20,
    marginVertical: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 50,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    color: "white",
  },
});
