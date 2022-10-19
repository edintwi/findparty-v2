import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BigHead } from 'react-native-bigheads';
import Swiper from 'react-native-deck-swiper';
import BtnPrefs from '../../components/BtnPrefs/BtnPrefs';

const data = [
    {   id: '1',
        nome: 'Favela Chique',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c585c81140313.5cf65a3382a41.png'
    },
    {   id: '2',
        nome: 'Night Party',
        image: 'https://img.freepik.com/vetores-gratis/banner-de-musica-de-festa-noturna-para-modelo-de-midia-social_17005-1357.jpg?w=2000'
    },
    {   id: '3',
        nome: 'Melim',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/adfe7b81140313.5cf65a33833f6.png'
    }
]

const Card = ({card}) =>(
    <TouchableOpacity>
        <View style={styles.card}>
            <Image source={{uri:card.image}} style={styles.cardImg} />
            
        </View>
    </TouchableOpacity>
    
)
function Home(){

    const [preference, setPreference] = useState('');

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="logout" size={40} color="#000" style={styles.logoutBtn} />
                </TouchableOpacity>
                
                <Text style={styles.headerText}>
                    Perto de Você
                </Text>
                <BigHead style={styles.userAvatar}
                    bgShape="circle"
                    size={50}
                    showBackground={true}
                />
            </View>
            <View style={styles.EventCards}>
                <Swiper
                    cards={data}
                    cardIndex={0}
                    stackSize={4}
                    disableBottomSwipe
                    disableTopSwipe
                    goBackToPreviousCardOnSwipeLeft = {true}
                    verticalSwipe={false}
                    backgroundColor={'transparent'}
                    renderCard={card => <Card card={card} />}
                >
                </Swiper> 
            </View>

            <ScrollView 
            style={styles.buttonsPrefs}
            horizontal={true}>

                <BtnPrefs icon='beer' name='Bar' value='bar'/>
                <BtnPrefs icon='wine' name='Boate' value='Boate'/>
                <BtnPrefs icon='musical-note-sharp' name='Show' value='Show'/>

            </ScrollView>
        </View>
       
    );
}
export default Home;