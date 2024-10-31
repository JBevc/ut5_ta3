import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function TaskElement({ task, deleteTask }) {
  return (
    <View style={styles.task}>
      <Text style={styles.text}> {task.name} </Text>
      <Button title="borrar" onPress={() => deleteTask(task.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5,
    textAlign: "center",
  },
  task: {
    display: "flex",
    flexDirection: "row",
  },
});
