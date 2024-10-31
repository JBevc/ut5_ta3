import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TaskElement, TaskList } from "./components/TaskList";

export default function App() {
  const initialTasks = [
    {
      id: 0,
      name: "Comer",
    },
    {
      id: 1,
      name: "Dormir",
    },
    {
      id: 2,
      name: "Volver a repetir",
    },
  ];

  const [tasks, setTasks] = React.useState(initialTasks);
  const [text, setText] = React.useState("");

  function handleChange(newText) {
    setText(newText);
  }

  function addTask() {
    const newTask = { id: tasks.length, name: text };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      <View style={styles.tareaInput}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={handleChange}
        />

        <View style={styles.boton}>
          <Button title="Agregar" onPress={addTask} />
        </View>
      </View>

      <View style={styles.list}>
        {tasks.map((task) => (
          <TaskElement key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    margin: 50,
    fontWeight: "bold",
  },
  text: {
    alignSelf: "flex-start",
    margin: 10,
    fontSize: 20,
  },
  input: {
    borderWidth: 1.5,
    width: 150,
    height: 50,
    borderRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
  },
  list: {
    marginTop: 40,
  },
  tareaInput: {
    display: "flex",
    flexDirection: "row",
  },
  boton: {
    borderWidth: 1.5,
    width: 100,
    height: 50,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderLeftWidth: 0,
    alignContent: "center",
    justifyContent: "center",
  },
});
