import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 0,
        margin: 0, 
        borderRadius: 50,
        shadowOffset: {
            width: -1,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    headerContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",      
    },
    textContainer:{
        textAlign: 'center',
        justifyContent: 'center',        
    },
    labelText:{
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width: -1, height:1 },
        textShadowRadius: 10
        
    },
   
});


export default styles;