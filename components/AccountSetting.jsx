import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import firebase, { auth } from "../firebase";
import { logout } from "../Redux/Auth/auth.actions";
import Toast from "react-native-simple-toast";
import { validateName } from "../helper";

export default function AccountSetting() {
  const refRBSheet = useRef();
  const email = useSelector((state) => state.AuthReducer.user);
  const [name, setName] = useState(null);
  let prevName = "";
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        setName(doc.data().name);
        prevName = doc.data().name;
      });
  }, []);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    auth
      .signOut()
      .then(() => Toast.show("Logged-out"))
      .catch((error) => Toast.show(error));
  };
  const update = () => {
    if (name.trim() === prevName.trim())
      return Toast.show("Please Change the name and Try Again!");
    if (!validateName(name))
      return Toast.show("Name must contain atleast 4 characters");
    db.collection("users")
      .doc(email)
      .set(
        {
          name,
        },
        {
          merge: true,
        }
      )
      .then(() => Toast.show("Updated !"))
      .catch((error) => Toast.show(error));
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={styles.trigger}
      >
        <MaterialCommunityIcons name="face-profile" size={30} color="#353b48" />
        <Text style={styles.triggerText}>{email}</Text>
        <View style={styles.drag} />
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        // closeOnPressMask={true}
        closeOnDragDown={true}
        keyboardAvoidingViewEnabled={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#353b48",
          },
          container: {
            backgroundColor: "#dcdde1",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={styles.accountSetting}>
          <TextInput
            onChangeText={(text) => setName(text)}
            value={name}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={update}
            style={[styles.button, { backgroundColor: "lightgreen" }]}
          >
            <Text style={styles.text}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.text}>LOG-OUT</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  triggerText: {
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    marginLeft: 10,
    color: "#353b48",
  },
  drag: {
    height: 5,
    width: 35,
    backgroundColor: "#353b48",
    borderRadius: 50,
    position: "absolute",
    top: 10,
  },
  accountSetting: {
    height: "100%",
    alignItems: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "80%",
    alignItems: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
  button: {
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ee5253",
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
  },
});
