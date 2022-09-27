import react, { useState } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import styles from "./Styles";

import Logo from "../../components/Logo/Logo";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";

const image = {
  uri: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showElement, setShowElement] = useState(false);

  return (
    <ImageBackground source={image} style={styles.backgroundStyle}>
      <Logo fontSize={200} />
      <View style={styles.formLogin}>
        <Text style={styles.labelLogin}>E-mail</Text>

        <TextInput
          style={styles.inputLogin}
          value={email}
          onChangeText={(value) => setEmail(value)}
          returnKeyType={"next"}
        ></TextInput>

        <Text style={styles.labelLogin}>Senha</Text>

        <TextInput
          style={styles.inputLogin}
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          icon={<Text>Show</Text>}
          iconPosition="right"
        ></TextInput>

        <Text style={styles.forwardPassword}>Esqueceu sua senha?</Text>
        {showElement ? (
          <Text style={styles.forwardPassword}>
            {" "}
            Usuário e/ou senha incorretos{" "}
          </Text>
        ) : null}
      </View>
      <View style={styles.buttonsView}>
        <ButtonLogin text={"Entrar"} />
      </View>
    </ImageBackground>
  );
}

export default SingIn;
