import React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles';

const Logo = (props) =>{
    let color = props.cor;
    let fontSize = props.fontSize;
    return(
        <Text style={styles.textStyle} > <Text style={{color:color}, {fontSize:fontSize}}> Fp </Text></Text>
    );
};

export default Logo;