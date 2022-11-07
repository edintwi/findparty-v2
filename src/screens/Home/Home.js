import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import { BigHead } from "react-native-bigheads";
import Swiper from "react-native-deck-swiper";
import BtnPrefs from "../../components/BtnPrefs/BtnPrefs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../../../data";
import styles from "./Styles";

const Home = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [preferenceSelected, setPreferenceSelected] = useState("");
  const [list, setList] = useState(data);

  let userDistancePreference = 10;

  const filterData = () => {
    if (preferenceSelected === "") {
      setList(
        data.filter((item) => {
          const distance = getDistanceFromLatLonInKm(
            userLatitude,
            userLongitude,
            item.latitude,
            item.longitude
          );
          if (distance <= userDistancePreference) {
            return true;
          }
        })
      );
    } else {
      setList(
        data.filter((item) => {
          const distance = getDistanceFromLatLonInKm(
            userLatitude,
            userLongitude,
            item.latitude,
            item.longitude
          );
          if (
            item.categoria === preferenceSelected &&
            distance <= userDistancePreference
          ) {
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
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status != "granted") {
        setErrorMsg("Permissão de acesso a localização negada");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "waiting";
  if (errorMsg) {
    text = errorMsg;
    console.log(text);
  } else if (location) {
    text = location;
    var userLatitude = text.coords.latitude;
    var userLongitude = text.coords.longitude;

    console.log("latitude: " + userLatitude);
    console.log("longitude: " + userLongitude);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    //calculando a distancia entre dois pontos
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  useEffect(() => {
    //filtrando resultados por categoria
    filterData();
  }, [preferenceSelected, location]);

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Home;
