import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from "./Styles";

const HandleTextInput = ({title, onChangeText, value, password}) =>{
  
    return(
        <View>
            <TextInput 
            placeholder = {title}  
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            returnKeyType={"next"}
            secureTextEntry={password}
            inlineImageLeft='search_icon'
            />
            
        </View>
    );  
};

export default HandleTextInput;