import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Input.styles";


const Input = ({onAddToDo}) => {

    const [content, setContent] = useState('');

    const handleAddToDo = () =>{
        onAddToDo({content});
        setContent('');
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput} 
                placeholder="What to do..." 
                placeholderTextColor={"white"} 
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddToDo}  >
                <Text>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Input;