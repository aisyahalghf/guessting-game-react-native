import { Text, View, StyleSheet } from "react-native";
import Colors from "../../util/colors";

const GuessLogItem = ({ roundNumber, item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}># {roundNumber}</Text>
      <Text style={styles.text}> Oponent's Guess {item}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: Colors.primary500,
    width: "100%",
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.primary400,
    borderRadius: 16,
    elevation: 5,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.secondary500,
  },
});
