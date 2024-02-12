import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './ToDoCard.styles';


const ToDoCard = ({toDo, onDeleteToDo}) => {
    const [completed, setCompleted] = useState(false);
    const handleDeleteToDo = () => {
        setCompleted(!completed);
        onDeleteToDo({completed : !completed});
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onLongPress={handleDeleteToDo}  style={[styles.touchable_op, {backgroundColor: completed ? "#808080" : "#7da453" }]}>
                <Text style={[styles.text, {textDecorationLine: completed ? 'line-through' : 'none'}]}>{toDo}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ToDoCard;