import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Styles';

type BtnPrefsProps = {
    icon: string,
    name: string,
    value: string
}
function BtnPrefs (props: BtnPrefsProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name={props.icon} size={40} color='black' />
            <Text style={styles.btnText}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}

export default BtnPrefs;