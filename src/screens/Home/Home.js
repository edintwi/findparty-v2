import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BigHead } from "react-native-bigheads";
import Swiper from "react-native-deck-swiper";
import BtnPrefs from "../../components/BtnPrefs/BtnPrefs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../../data";
import styles from "./Styles";

const Home = () => {
  const navigation = useNavigation();

  const [preferenceSelected, setPreferenceSelected] = useState("");
  const [list, setList] = useState(data);

  const filterData = () => {
    if (preferenceSelected === "") {
      setList(data);
    } else {
      setList(
        data.filter((item) => {
          if (item.categoria === preferenceSelected) {
            console.log(list);
            return true;
          } else {
            return false;
          }
        })
      );
    }
  };
  
  useEffect(() => {
    filterData();
  }, [preferenceSelected]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="logout" size={40} color="#000" style={styles.logoutBtn} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Perto de Você</Text>
        <BigHead
          style={styles.userAvatar}
          bgShape="circle"
          size={50}
          showBackground={true}
        />
      </View>
      <View style={styles.EventCards}>
        <Swiper
          cards={list}
          renderCard={(card) => {
            if (card != null) {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    navigation.navigate("EventProfile", {
                      id: card.id,
                      nome: card.nome,
                      categoria: card.categoria,
                      image: card.image,
                      avaliacao: card.avaliacao,
                    });
                  }}
                >
                  <Image source={{ uri: card.image }} style={styles.cardImg} />
                </TouchableOpacity>
              );
            }
          }}
          stackSize={4}
          stackSeparation={10}
          disableBottomSwipe
          disableTopSwipe
          verticalSwipe={false}
          backgroundColor={"transparent"}
          keyExtractor={(card) => card.id}
        ></Swiper>
      </View>
      <View style={styles.buttonsPrefs}>
        <BtnPrefs
          icon="wine"
          name="Todos"
          onPress={() => setPreferenceSelected("")}
        />
        <BtnPrefs
          icon="beer"
          name="Bar"
          onPress={() => setPreferenceSelected("Bar")}
        />
        <BtnPrefs
          icon="wine"
          name="Boate"
          onPress={() => setPreferenceSelected("Boate")}
        />
        <BtnPrefs
          icon="musical-note-sharp"
          name="Show"
          onPress={() => setPreferenceSelected("Show")}
        />
      </View>
    </View>
  );
};

export default Home;
