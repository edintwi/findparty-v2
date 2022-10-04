import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './Styles';

const image = {uri: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'};

const HeaderBanner = () =>{
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.headerContainer} imageStyle={{borderBottomRightRadius:50 ,borderBottomLeftRadius: 50}}>
                <View style={styles.textContainer}> 
                    <Text style={styles.labelText} > A um passo </Text>
                    <Text style={styles.labelText}> De encontrar </Text>
                    <Text style={styles.labelText}> Seu próximo </Text>
                    <Text style={styles.labelText}> Rolê </Text>
                </View>    
            </ImageBackground>
        </View>
    );
};

export default HeaderBanner;