import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#9cb6dd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed && StyleSheet.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#d3e2f2",
  },
  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "#262c40",
    padding: 8,
  },
});
