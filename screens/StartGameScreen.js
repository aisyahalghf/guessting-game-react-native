import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../util/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import TextDirection from "../components/ui/TextDirection";

const StartGameScreen = ({ onPress }) => {
  const [inputNumber, setInputNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    parseInt(enteredText);
    setInputNumber(enteredText);
  };

  const resetInputHandler = () => {
    setInputNumber("");
  };

  const confirmInputNumber = () => {
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        (butttons = [
          { text: "okay", style: "destructive", onPress: resetInputHandler },
        ])
      );
      return;
    }
    onPress(inputNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title text={"Guess My Number"} />

      <Card style={styles.inputContainer}>
        <TextDirection>Give me a number </TextDirection>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputNumber}
          onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.secondary500,
    marginBottom: 6,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },

  buttonOuterContainer: {
    margin: 5,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
