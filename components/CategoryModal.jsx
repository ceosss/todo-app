import React from "react";
import { StyleSheet, Text, View, Modal, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoItem from "./todoItem";

const CategoryModal = ({ data, visible, toggleVisible }) => {
  const closeModal = () => toggleVisible(false);
  return (
    <Modal visible={visible} onRequestClose={closeModal} animationType="slide">
      <View style={styles.categoryNameContainer}>
        <Text style={styles.categoryName}>{data.category.toUpperCase()}</Text>
        <AntDesign
          name="close"
          size={24}
          color="black"
          style={styles.cross}
          onPress={closeModal}
        />
      </View>
      <View style={styles.todos}>
        <FlatList
          data={data.todo}
          renderItem={({ item }) => <TodoItem data={item} />}
          keyExtractor={(item, index) => "key" + index}
        />
      </View>
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  categoryNameContainer: {
    alignItems: "center",
    padding: 25,
    marginBottom: 20,
    borderBottomLeftRadius: 50,
    backgroundColor: "yellowgreen",
  },
  categoryName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  cross: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
