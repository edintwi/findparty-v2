import React from "react";
import {View, Text, Image} from 'react-native';
import TopBar from "../../components/TopBar/TopBar";
import EventBanner from "../../components/EventBanner/EventBanner";
import styles from "./Styles";

const EventProfile = ({route}) =>{
    return (
        <View>
            <TopBar text='Evento'/>
            <EventBanner eventImg={route.params?.image} eventTitle={route.params?.nome} eventRating={route.params?.avaliacao}/>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {route.params?.nome}
                </Text>
            </View>
        </View>
    )
}
export default EventProfile;