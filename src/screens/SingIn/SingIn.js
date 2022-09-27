import react, {useState} from 'react';
import {View, Text, ImageBackground, TextInput} from 'react-native';
import styles from './Styles';

const image = {
    uri: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };

function SingIn (){
    return (
        <ImageBackground source={image} style={styles.backgroundStyle}>
          
           
        </ImageBackground>
    )
};

export default SingIn;