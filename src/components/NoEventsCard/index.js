import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";

const NoEventsCard = () => {
    return (
        <View style={styles.container}>
            <Icon name='mood-bad' size={150} style={styles.icon}/>
            <Text style={styles.text}>
                Que Pena!
                
            </Text>
            <Text style={styles.text}>
            Não encontramos nenhum evento proximo à você.
            </Text>
        </View>
    )
};

export default NoEventsCard;