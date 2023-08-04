import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    marginVertical: 16,
    marginHorizontal: 32,
    paddingVertical: 32,
    borderRadius: 8,
  },
  text: {
    color: Colors.secondary500,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});
