import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-simple-toast";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/auth.actions";
import { auth } from "../firebase";
import CategoryItem from "./CategoryItem";
import data from "../data";

const Todo = () => {
  const [todos, setTodos] = useState(data);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    auth
      .signOut()
      .then(() => Toast.show("Logged-out"))
      .catch((error) => Toast.show(error));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>CATEGORIES</Text>
        </View>
        <View style={styles.category}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <CategoryItem data={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => "key" + index}
          />
        </View>
      </View>
      <View style={styles.endContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.button}>LOG-OUT</Text>
        </TouchableOpacity>
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
    paddingHorizontal: "5%",
    paddingTop: "12%",
    paddingBottom: "8%",
    height: "15%",
  },
  headerText: {
    fontSize: 32,
    width: "100%",
    textAlign: "center",
    // letterSpacing: 2,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
  },
  line: {
    marginTop: 20,
    height: 1,
    backgroundColor: "#333",
  },
  midContainer: {
    height: "70%",
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  categoryText: {
    fontSize: 20,
    color: "#6800fa",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  category: {},
  endContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "#ee5253",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    color: "white",
  },
});
