import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import TodoItem from "./todoItem";
import ProgressCircle from "react-native-progress-circle";
import Toast from "react-native-simple-toast";
import TodoInput from "./todoInput";
import firebase from "../firebase";
import { useSelector } from "react-redux";

const CategoryModal = ({ data, visible, toggleVisible }) => {
  const closeModal = () => toggleVisible(false);
  const db = firebase.firestore();
  const email = useSelector((state) => state.AuthReducer.user);
  // data.todo.length > 0 ? 0 : data.todo.filter((todo) => todo.done).length;
  const completed = data.todo.filter((todo) => todo.done).length;
  const updateTodos = (updateId) => {
    const getUpdatedTodo = () => {
      let copyTodo = data.todo;
      let updatedTodos = [];
      copyTodo.forEach((todo) => {
        todo.id !== updateId
          ? updatedTodos.push(todo)
          : updatedTodos.push({
              done: !todo.done,
              id: todo.id,
              name: todo.name,
            });
      });
      return updatedTodos;
    };
    db.collection("users")
      .doc(email)
      .collection("categories")
      .doc(data.category.toLowerCase())
      .set(
        {
          todo: getUpdatedTodo(),
        },
        { merge: true }
      )
      .then((doc) => {
        Toast.show("Todo Updated");
      })
      .catch((error) => Toast.show(error));
  };
  const handleDelete = () => {
    db.collection("users")
      .doc(email)
      .collection("categories")
      .doc(data.category.toLowerCase())
      .delete()
      .then(() => Toast.show("Delete Successful"))
      .catch((error) => Toast.show(error));
  };
  const handelDeleteAlert = () =>
    Alert.alert(
      "Alert",
      "Are you sure you want to delete " + '"' + data.category + '"?',
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "DELETE", onPress: handleDelete },
      ],
      { cancelable: true }
    );

  return (
    <Modal visible={visible} onRequestClose={closeModal} animationType="slide">
      <View style={styles.modal}>
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
          <View style={styles.options}>
            <AntDesign
              name="close"
              size={24}
              color="black"
              style={styles.cross}
              onPress={closeModal}
            />
            <TouchableOpacity style={styles.delete} onPress={handelDeleteAlert}>
              <MaterialIcons name="delete" size={24} color="#2f3542" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.todos}>
          <FlatList
            data={data.todo}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <TodoItem
                data={item}
                category={data.category}
                updateTodos={updateTodos}
              />
            )}
            keyExtractor={(item, index) => "key" + index}
          />
        </View>
        <View style={styles.addTodo}>
          <TodoInput category={data.category} />
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  modal: {},
  categoryNameContainer: {
    // alignItems: "center",
    padding: 15,
    marginBottom: 20,
    height: "10%",
  },
  categoryName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    fontFamily: "Montserrat_800ExtraBold",
    fontWeight: "800",
    color: "#333",
    marginLeft: 10,
    textTransform: "capitalize",
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
  options: {
    position: "absolute",
    top: 16,
    right: 16,
    flexDirection: "column",
  },
  cross: {},
  delete: {
    marginTop: 16,
  },
  todos: {
    height: "70%",
    paddingTop: 20,
  },
  addTodo: {
    height: "20%",
    // marginBottom: 20,
  },
});
