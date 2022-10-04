import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../screens/SingIn/SingIn";
import Register from "../screens/Register/Register";
const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
export default AuthRoutes;
