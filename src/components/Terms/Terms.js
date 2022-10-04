import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

const Terms = () => {
    const navigation = useNavigation();
    const redirectLogin = () => {
        navigation.navigate('SingIn');
    }
    return (
        <View style={styles.termsContainer}>
            <View style={styles.line}>
           
                <Text style={styles.termText}>
                    Eu li e aceito os <Text style={styles.termTextLink}>termos de condição de uso</Text>  </Text>
            </View>

            <Text style={styles.termText}>
                Já tem uma conta?  
                <Text 
                style={styles.termTextLink} 
                onPress={redirectLogin}> 
                Faça o Login
                </Text>
            </Text>
        </View>
    );

};

export default Terms;