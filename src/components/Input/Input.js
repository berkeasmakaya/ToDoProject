import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./Input.styles";


const Input = ({onAddToDo}) => {

    const [content, setContent] = useState('');
    const [buttonColor, setButtonColor] = useState('#808080');

    const handleButtonColor = () => {
        if (content.length>-1) {
            setButtonColor('#fda400');
        }
    }

    const handleAddToDo = () =>{
        if (content.trim() === '') {
            setButtonColor('#808080')
            return;
        }
        onAddToDo({content});
        setContent('');
        setButtonColor('#808080')
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput} 
                placeholder="What to do..."  
                value={content}
                onChangeText={(text) => {
                    setContent(text);
                    handleButtonColor();
                }}
                
            />
            <TouchableOpacity style={[styles.button, {backgroundColor:buttonColor}]} onPress={handleAddToDo}   >
                <Text numberOfLines={4} ellipsizeMode="tail" style={{fontWeight:"bold", color:"#000000"}} >SAVE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Input;