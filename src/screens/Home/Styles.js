import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E9E9E9',
        height: '100%',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 10
    },
    logoutBtn:{
        marginTop: 5
    },
    headerText:{
        textAlign: 'center',
        fontFamily: "Poppins_600SemiBold",
        fontSize: 14,
        marginTop: 20,
    },
    userAvatar:{
        borderRadius: 50,
    },
    EventCards:{
        flex: 3,
        padding: 0,
        margin: 0,
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 400,
        borderRadius: 30,
        margin: 0,
        padding: 0,
    },
    cardImg:{
        borderRadius: 30,
        width: '100%',
        height: '100%'
    },
    buttonsPrefs:{
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        marginTop: 20
    }
});

export default styles;