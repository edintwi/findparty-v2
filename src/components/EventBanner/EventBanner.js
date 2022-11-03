import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import styles from './styles';

const image = "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const EventBanner = ({eventImg, eventTitle, eventRating}) =>{
    return(
        <View style={styles.container}>
            <ImageBackground source={{uri:image}} style={styles.backgroundStyle} resizeMode="stretch">
                <View style={styles.avatar}>
                    <Image source={{uri:eventImg}} style={styles.img} resizeMode="stretch"/>
                </View>
            </ImageBackground>
        </View>
        
    )
}

export default EventBanner;
