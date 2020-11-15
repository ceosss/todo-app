import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import CategoryItem from "./CategoryItem";
import data from "../data";

const Todo = () => {
  const [todos, setTodos] = useState(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO HANDLER</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>CATEGORIES</Text>
      </View>
      <View style={styles.category}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryItem data={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => "key" + index}
        />
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "lightblue",
    shadowColor: "#333",
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    letterSpacing: 2,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6800fa",
  },
  category: {},
});
