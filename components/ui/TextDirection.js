import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

const TextDirection = ({ children, style }) => {
  return <Text style={[styles.textDirection, style]}>{children}</Text>;
};

export default TextDirection;

const styles = StyleSheet.create({
  textDirection: {
    color: Colors.secondary500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
