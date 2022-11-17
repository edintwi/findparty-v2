import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import TopBar from "../../components/TopBar/TopBar";
import EventBanner from "../../components/EventBanner/EventBanner";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Ionicons";
import ButtonNormal from "../../components/ButtonNormal/ButtonNormal";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";

const EventProfile = ({ route }) => {
  let id = route.params?.id;
  let nome = route.params?.nome;
  let image = route.params?.image;
  let avaliacao = route.params?.avaliacao;
  let endereco = route.params?.endereco;
  let vendaingre = route.params?.vendaingre;
  let date = route.params?.date;
  let time = route.params?.time;

  const Detalhes = () => {
    return (
      <View>
        <View>
          <Text style={styles.textTitle}>Detalhes</Text>
        </View>
        <View style={styles.viewInfo}>
          <Icon name="man" size={15} style={styles.Icon}>
            <Text style={styles.text}>220 pessoas confirmaram presença</Text>
          </Icon>
        </View>
        <View style={styles.viewInfo}>
          <Icon name="user" size={15} style={styles.Icon}>
            <Text style={styles.text}>Evento {route.params?.nome}</Text>
          </Icon>
        </View>
        <View style={styles.viewInfo}>
          <Icon name="address" size={15} styles={styles.Icon}>
            <Text style={styles.text}>{route.params?.endereco}</Text>
          </Icon>
        </View>
        <View style={styles.viewInfo}>
          <Icon2 name="clock" size={15} styles={styles.Icon}>
            <Text style={styles.text}>
              Começa as {route.params?.time} no dia {route.params?.date}
            </Text>
          </Icon2>
        </View>
        <View style={styles.viewInfo}>
          <Icon3 name="globe" size={15} styles={styles.Icon}>
            <Text style={styles.text}>
              Qualquer pessoa dentro ou fora do FindParty
            </Text>
          </Icon3>
        </View>
        <View>
          <Text style={styles.textInfo}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    );
  };
  

  const Fotos = () => {
    <View style={styles.containerCarousel}>
      <TouchableOpacity onPress={goFoward}></TouchableOpacity>
    </View>;
  };

  const Avaliacoes = () => {
    return (
      <View>
        <Text> Avaliacoes </Text>
      </View>
    );
  };

  const [screnn, setScrenn] = useState("Detalhes");

  const IsScrenn = () => {
    if (screnn === "Detalhes") {
      return <Detalhes />;
    } else if (screnn === "Fotos") {
      return <Fotos />;
    } else if (screnn === "Avaliacoes") {
      {
        return <Avaliacoes />;
      }
    }
  };

  return (
    <View>
      <TopBar text="Evento" />
      <EventBanner
        eventImg={route.params?.image}
        eventTitle={route.params?.nome}
        eventRating={route.params?.avaliacao}
      />
      <View style={styles.container}>
        <Text style={styles.textEvent}>{route.params?.nome}</Text>
      </View>
      <View style={styles.star}>
        <Icon name="star" size={20} style={styles.star1}>
          <Text>4,5</Text>
        </Icon>
      </View>
      <View style={styles.buttonView}>
        <ButtonNormal text="Detalhes" onPress={() => setScrenn("Detalhes")} />
        <ButtonNormal text="Fotos" onPress={() => setScrenn("Fotos")} />
        <ButtonNormal
          text="Avaliações"
          onPress={() => setScrenn("Avaliacoes")}
        />
      </View>
      <>{IsScrenn()}</>
    </View>
  );
};
export default EventProfile;
