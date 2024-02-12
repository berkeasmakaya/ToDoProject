import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        height:Dimensions.get("window").height*0.1,
    },
    touchable_op:{
        borderRadius:10,
        backgroundColor:"#7da453",
        margin:10,
        textDecorationLine:"underline"
    },
    text:{
        fontSize:30,
        padding:5,
        margin:5,
        color:"white"
    }
})