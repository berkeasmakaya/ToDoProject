import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './ToDoCard.styles';


const ToDoCard = ({toDo}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable_op}>
                <Text style={styles.text}>{toDo}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ToDoCard;