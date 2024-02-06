import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./Header.styles";

const Header = ({counter}) => {
    
    return(
        <View style={styles.header_container}>
            <Text style={styles.header_text}>My ToDo List</Text>
            <Text style={styles.counter_text}>{counter}</Text>
        </View>
    )
}

export default Header;