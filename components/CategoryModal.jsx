import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoItem from "./todoItem";
import ProgressCircle from "react-native-progress-circle";
import { Entypo } from "@expo/vector-icons";

const CategoryModal = ({ data, visible, toggleVisible }) => {
  const closeModal = () => toggleVisible(false);
  const completed = data.todo.filter((todo) => todo.done).length;
  return (
    <Modal visible={visible} onRequestClose={closeModal} animationType="slide">
      <View style={styles.categoryNameContainer}>
        <View style={styles.progress}>
          <ProgressCircle
            percent={(completed / data.todo.length) * 100}
            radius={15}
            borderWidth={5}
            color="lightgreen"
            shadowColor="#eee"
            bgColor="#fff"
          ></ProgressCircle>
          <Text style={styles.categoryName}>{data.category}</Text>
        </View>
        <Text style={styles.stats}>
          {completed} of {data.todo.length} tasks
        </Text>
        <View style={styles.horizontal}></View>
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
      <TouchableOpacity style={styles.add}>
        <Entypo name="plus" size={24} color="#333" />
      </TouchableOpacity>
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  categoryNameContainer: {
    // alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    color: "#333",
    marginLeft: 10,
  },
  progress: {
    flexDirection: "row",
    alignItems: "center",
  },
  stats: {
    marginLeft: 45,
    color: "#aaa",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  horizontal: {
    width: "100%",
    backgroundColor: "#ccc",
    height: 1,
    marginTop: 10,
  },
  cross: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  add: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "lightgreen",
    padding: 12,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#ccc",
    shadowOpacity: 0.2,
    shadowOffset: { width: 3, height: 3 },
  },
});
