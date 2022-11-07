import React from "react";
import { View, Text, Image } from "react-native";
import TopBar from "../../components/TopBar/TopBar";
import EventBanner from "../../components/EventBanner/EventBanner";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Entypo";
import ButtonNormal from "../../components/ButtonNormal/ButtonNormal";

const EventProfile = ({ route }) => {
  return (
    <View>
      <TopBar text="Evento" />
      <EventBanner
        eventImg={route.params?.image}
        eventTitle={route.params?.nome}
        eventRating={route.params?.avaliacao}
      />
      <View style={styles.container}>
        <Text style={styles.text}>{route.params?.nome}</Text>
      </View>
      <View style={styles.star}>
        <Icon name="star" size={20} style={styles.star1}>
          <Text>4,5</Text>
        </Icon>
      </View>
      <View style={styles.buttonView}>
        <ButtonNormal text="Avaliações"/>
        <ButtonNormal text="Fotos" />
        <ButtonNormal text="Parceria"/>
      </View>
      <View style={styles.textSobre}>
        
      </View>
    </View>
  );
};
export default EventProfile;
