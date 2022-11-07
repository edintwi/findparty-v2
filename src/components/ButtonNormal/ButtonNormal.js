import React from "react";

import { Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ButtonNormal = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.TextButtonNormal}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNormal;