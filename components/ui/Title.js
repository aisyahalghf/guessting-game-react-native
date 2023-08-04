import { View, Text, StyleSheet } from "react-native";

const Title = ({ text }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleTextInput}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  titleTextInput: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
