import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import styles from './Styles';


function BtnPrefs ( {name, icon, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} size={40} color='black' />
            <Text style={styles.btnText}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default BtnPrefs;        