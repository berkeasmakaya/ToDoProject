import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import ToDoCard from "./components/ToDoCard";
import Input from "./components/Input";


function App() {
  const renderToDo = ({item, index}) => (
    <ToDoCard key={index.toString()} toDo={item.content} onDeleteToDo={deleteToDo} />
  )
  const [toDoList, setToDoList] = useState([]);
  const [counter, setCounter] = useState(0);

  const addToDo = ({content, completed}) =>{
    setToDoList([...toDoList, {content, completed}]);
    setCounter(counter + 1);
  }

  const deleteToDo = ({completed}) => {
    if (completed) {
      setCounter(counter-1);
    }
    else{
      setCounter(counter+1);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Header counter={counter} />
          <FlatList style={styles.flatList}
            data={toDoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderToDo}
            contentContainerStyle={styles.flatListContent}
          />
          <Input onAddToDo={addToDo} />
        </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#102027"
  },
  innerContainer:{flex:1},
  flatList:{flex:1},
  flatListContent:{paddingBottom: 120}
})