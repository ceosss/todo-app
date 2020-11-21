import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SignInOptions from "../components/SignInOptions";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const screens = {
  SignInOptions: {
    screen: SignInOptions,
    navigationOptions: {
      headerShown: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: null,
    },
  },
};

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);
