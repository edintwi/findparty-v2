import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './Styles';

const TopBar = ({text}) =>{

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Icon name='md-chevron-back' color='white' size={40}/>
            </TouchableOpacity>
            
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

export default TopBar;
