import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    paddingTop: 60,
    fontFamily: "Poppins_700Bold",
  },

  star: {
    justifyContent: "center",
    display: "flex",
    marginBottom: 20,
  },

  star1: {
    alignSelf: "center",
  },

  buttonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },

  textTitle: {
    textAlign: "center",
    paddingTop: 10,
    fontFamily: "Poppins_700Bold",
    paddingLeft: 5,
    fontSize: 20,
  },

  textEvent: {
    textAlign: "center",
    paddingTop: 60,
    fontFamily: "Poppins_700Bold",
    paddingLeft: 5,
    fontSize: 20,
  },

  textInfo: {
    backgroundColor: "black",
    color: "white",
    height: 100,
  },

  Icon: {
    paddingLeft: 3,
    display: "flex",
    flexDirection: "column",
  },

  viewInfo: {
    paddingTop: 1,
    paddingLeft: 3,
  },

  Icon2: {
    paddingLeft: 3,
    display: "flex",
    flexDirection: "column",
  },

  Icon3: {
    paddingLeft: 3,
    display: "flex",
    flexDirection: "column",
  },

  viewPrincipalFoto: {
    height: 130,
    marginTop: 20,
  },

  scroll: {
    height: 130,
    width: 130,
  },

  imageScroll: {
    flex: 2,
  },

  agrImage: {
    flex: 1,
  },

  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeModel: "cover",
  },

  textScroll: {
    flex: 1,
  },
});

export default styles;
