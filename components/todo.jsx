import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import data from "../data";

const Todo = () => {
  const [todos, setTodos] = useState(data);
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
    // position: "absolute",
    marginTop: 20,
    height: 1,
    backgroundColor: "#333",
  },
  midContainer: {},
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
});
