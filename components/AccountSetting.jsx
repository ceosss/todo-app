import React, { useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

export default function AccountSetting() {
  const refRBSheet = useRef();
  const email = useSelector((state) => state.AuthReducer.user);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // backgroundColor: "#f5f6fa",
      }}
    >
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={styles.trigger}
      >
        <MaterialCommunityIcons name="face-profile" size={30} color="black" />
        <Text style={styles.triggerText}>{email}</Text>
        <View style={styles.drag} />
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        // closeOnPressMask={true}
        closeOnDragDown={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            backgroundColor: "#dcdde1",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <View style={styles.accountSetting}>
          <Text>HELLO</Text>
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
  },
});
