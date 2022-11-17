<<<<<<< Updated upstream
import React, {useState, useEffect} from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> Stashed changes
import { View, Text, Image } from "react-native";
import TopBar from "../../components/TopBar/TopBar";
import EventBanner from "../../components/EventBanner/EventBanner";
import styles from "./Styles";
import Icon from "react-native-vector-icons/Entypo";
import ButtonNormal from "../../components/ButtonNormal/ButtonNormal";

function useButton() {
  const [screen, setScreen] = useState();
  const handleClick = () => setScreen(screen);

  useEffect(() => {
    
  });
}

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
         <Text> Detalhes </Text>
      </View>
    )
  }
  
  const Fotos = () => {
    return (
      <View>
         <Text> Fotos </Text>
      </View>
    )
  }
  
  const Avaliacoes = () => {
    return (
      <View>
         <Text> Avaliacoes </Text>
      </View>
    )
  }

  const [screnn, setScrenn] = useState('Detalhes');

  const IsScrenn =() => {
    if(screnn === 'Detalhes'){
      return <Detalhes/>
    }else if(screnn === 'Fotos'){
      return <Fotos/>
    }else if(screnn === 'Avaliacoes'){{
      return <Avaliacoes/>
    }}
  }


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
<<<<<<< Updated upstream
        <ButtonNormal text="Detalhes" onPress={() => setScrenn('Detalhes')}/>
        <ButtonNormal text="Fotos" onPress={() => setScrenn('Fotos')}/>
        <ButtonNormal text="Avaliações" onPress={() => setScrenn('Avaliacoes')}/>
=======
        <ButtonNormal text="Avaliações" />
        <ButtonNormal text="Fotos" />
        <ButtonNormal text="Parceria" />
>>>>>>> Stashed changes
      </View>
          <>
           {IsScrenn()}
          </>
    </View>
  );
};
export default EventProfile;
