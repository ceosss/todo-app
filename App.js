import React from "react";
import Main from "./Main";
import { AppLoading } from "expo";
import rootReducer from "./Redux/root-reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(rootReducer);

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
