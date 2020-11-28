import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import Todo from "./components/todo";
import AuthStack from "./routes/AuthStack";
import { login } from "./Redux/Auth/auth.actions";
import { auth } from "./firebase";

export default function App() {
  const user = useSelector((state) => state.AuthReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.email));
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      {user ? <Todo /> : <AuthStack />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
