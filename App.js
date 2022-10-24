import React, { useState, useEffect } from "react";

import { Routes } from "./src/routes/index";

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
import { Ranga_400Regular } from "@expo-google-fonts/ranga";
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_300Light_Italic,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";


export default function App() {
  const [fontsLoaded] = useFonts({
    Ranga_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_300Light_Italic,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
}
