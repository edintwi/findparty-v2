import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        margin:0,
        padding:0,
        height: '100%',
    },
    userAvatar:{
        backgroundColor: 'black',
        borderRadius: 300
    },
    userInfo:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        margin:0,
        borderBottomWidth: 2,
        borderBottomColor: '#c4c4c4'
    },
    textTitle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
    },
    textSubTitle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
    },
    configurationList:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }, 
    distancePreference: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 2,
        width: '100%',
        paddingBottom: 20,
        paddingTop: 20
    }
});

export default styles;