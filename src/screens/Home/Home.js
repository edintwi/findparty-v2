import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./Styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BigHead } from "react-native-bigheads";
import Swiper from "react-native-deck-swiper";
import BtnPrefs from "../../components/BtnPrefs/BtnPrefs";
import data from "../../../data";

const Card = ({ card }) => (
    <View style={styles.card}>
      <Image source={{ uri: card.image }} style={styles.cardImg} />
    </View>
);
function Home() {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  }
  const [preferenceSelected, setPreferenceSelected] = useState("");
  const [list, setList] = useState(data);

  useEffect(() => {
    if (preferenceSelected === "") {
      setList(data);
    } else {
      setList(
        data.filter(item => {
          if (item.categoria === preferenceSelected) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
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
          cardIndex={index}
          onSwiper={onSwiped}
          stackSize={4}
          stackSeparation={10   }
          disableBottomSwipe
          disableTopSwipe
          verticalSwipe={false}
          backgroundColor={"transparent"}
          renderCard={(card) => <Card card={card} />}
        ></Swiper>
      </View>

      <ScrollView style={styles.buttonsPrefs} horizontal={true}>
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
      </ScrollView>
    </View>
  );
}
export default Home;
