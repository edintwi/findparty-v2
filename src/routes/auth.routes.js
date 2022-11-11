import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home/Home';
import SingIn from "../screens/SingIn/SingIn";
import Register from "../screens/Register/Register";
import EventProfile from '../screens/EventProfile/EventProfile';
import UserConfig from '../screens/UserConfig/UserConfig';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="SingIn"
      screenOptions={{
        headerShown: false,
      }}
      
    >
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="EventProfile" component={EventProfile}/>
      <Stack.Screen name="UserConfig" component={UserConfig} />
      
    </Stack.Navigator>
  );
};
export default AuthRoutes;
