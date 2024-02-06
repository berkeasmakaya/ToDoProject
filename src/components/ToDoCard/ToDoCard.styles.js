import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        height:Dimensions.get("window").height*0.1,
    },
    touchable_op:{
        
        borderStyle:"solid",
        borderRadius:10,
        backgroundColor:"#7da453",
        margin:10,
    },
    text:{
        fontSize:30,
        padding:5,
        margin:5,
        color:"white"
    }
})