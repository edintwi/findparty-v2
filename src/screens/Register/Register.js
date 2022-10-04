import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";

import config from "../../../config/config.json";
import Logo from "../../components/Logo/Logo";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import Terms from "../../components/Terms/Terms";
import HandleTextInput from "../../components/HandleTextInput/HandleTextInput";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";

const Register = () => {
  // -- PEGANDO A ENTRADA DO DO USUÁRIO
  const [userName, setUserName] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [checkBoxState, setCheckboxState] = useState(false);
  const navigation = useNavigation();

  // -- REGISTRAR USUÁRIO
  async function handleNewAccount(userName, name, email, password) {
    let req = await fetch(config.urlRootNode + "create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        nameUser: name,
        emailUser: email,
        passwordUser: password,
      }),
    });

    let ress = await reqs.JSON();
  }

  // -- VALIDAÇÃO DE VALIDAÇÃO DO FORMULÁRIO
  const handleNewAcount = () => {
    if (
      userName != null &&
      name != null &&
      email != null &&
      password != null &&
      confirmPassword != null
    ) {
      if (password === confirmPassword) {
        handleNewAccount(userName, name, email, password);
        alert("Cadastrado com sucesso!");
        navigation.navigate("SingIn");
      } else {
        alert("As senhas não são iguais");
      }
    } else {
      alert("Por favor, prencha todos os campos!");
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView keyboardVerticalOffset={80}>
        <ScrollView alwaysBounceVertical={true}>
          <View style={styles.container}>
            <HeaderBanner />

            <Logo color="black" fontSize={50} />

            <HandleTextInput
              title="Nome de usuário"
              onChangeText={(value) => setUserName(value)}
            />
            <HandleTextInput
              title="Nome"
              onChangeText={(value) => setName(value)}
            />
            <HandleTextInput
              title="E-mail"
              onChangeText={(value) => setEmail(value)}
            />
            <HandleTextInput
              title="Senha"
              password={true}
              onChangeText={(value) => setPassword(value)}
            />
            <HandleTextInput
              title="Confirmar Senha"
              password={true}
              onChangeText={(value) => setConfirmPassword(value)}
            />

            <ButtonLogin text="Cadastrar" onPress={handleNewAcount} />
            <View style={styles.waringContainer}>
              <Terms />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
