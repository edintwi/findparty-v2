import React from 'react';
import{View, Text} from 'react-native';


import { BigHead } from 'react-native-bigheads';
import TopBar from '../../components/TopBar/TopBar';
import ListOption from '../../components/ListOption/ListOption';
import NumericInput from 'react-native-numeric-input';

import styles from './Styles';

const UserConfig = ({route}) => {
    let userDistancePreference =  route.params?.userDistancePreference;
    return (
        <View style={styles.container}>
            <TopBar text='Configurações'/>
            <View style={styles.userInfo}>
                <BigHead
                    style={styles.userAvatar}
                    bgShape="circle"
                    size={150}
                    
                />
                <Text style={styles.textTitle}>
                    UserName
                </Text>
                <Text style={styles.textSubTitle}>
                    UserNick
                </Text>
            </View>
            <View style={styles.configurationList}>
                <View  style={styles.distancePreference}>
                    <Text style={styles.textSubTitle}>
                        Prefencia de distancia
                    </Text>
                    <NumericInput
                        value={userDistancePreference}
                        onChange={value => console.log(value)}  
                       
                        totalWidth={200}
                        totalHeight={30}
                    />
                    
                </View>
                
                <ListOption
                    text='Privacidade'
                />
                 <ListOption
                    text='Sair'
                />
            </View>
        </View>
    )
};

export default UserConfig;