import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const ButtonLogin = ({text, onPress}) =>{
    return (

        <TouchableOpacity style = {styles.container}
        onPress={onPress}
        >
            <Text 
                style = {styles.TextButtonLogin}
            > {text}</Text>
        </TouchableOpacity>
       
    );
}

export default ButtonLogin;