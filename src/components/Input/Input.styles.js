import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#37474f",
        width:Dimensions.get("window").width*1,
        height:Dimensions.get("window").height*0.17,
        position:"absolute",
        bottom:0
    },
    textInput:{
        borderRadius:10,
        borderBottomWidth:1,
        borderBottomColor:"black",
        margin:10,
    },
    button:{
        marginHorizontal:15,
        paddingVertical:6,
        alignItems:"center",
        borderRadius:10,
    }

})