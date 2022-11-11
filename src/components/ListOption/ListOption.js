import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles';

const ListOption = ({text}) =>{
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.textOption}>{text}</Text>
      </TouchableOpacity>
    )
};

export default ListOption;

