import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Logo from "../assets/Logo";

const SignInOptions = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/4086940.jpg")}
      style={styles.container}
    >
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
    </ImageBackground>
  );
};

export default SignInOptions;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "orange",
    height: "100%",
  },
  head: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    color: "white",
  },
  body: {
    height: "70%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  logo: {
    marginBottom: 30,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
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
