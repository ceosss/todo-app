import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getColor } from "../data";
import CategoryModal from "./CategoryModal";

const CategoryItem = ({ data }) => {
  const [modalVisible, toggleModalVisible] = useState(false);
  const completed = data.todo.filter((todo) => todo.done).length;
  return (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: data.color }]}
      onPress={() => toggleModalVisible(true)}
    >
      <Text style={styles.categoryName}>{data.category.toUpperCase()}</Text>
      <View style={styles.stats}>
        <Text style={styles.statsText}>
          {completed} of {data.todo.length}
        </Text>
        <Text style={styles.statsHeader}>Completed</Text>
      </View>
      <CategoryModal
        data={data}
        visible={modalVisible}
        toggleVisible={toggleModalVisible}
      />
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    width: 150,
    height: 200,
    alignItems: "center",
    backgroundColor: "lightgray",
    marginHorizontal: 10,
    marginVertical: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#333",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  stats: {
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  statsText: {
    fontFamily: "Montserrat_300Light",
    fontWeight: "300",
  },
  statsHeader: {
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
});
