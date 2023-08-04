import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import TextDirection from "../components/ui/TextDirection";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (max, min, exclude) => {
  const generateNumber = Math.floor(Math.random() * (max - min) + min);

  if (generateNumber === exclude) {
    generateRandomBetween(max, min, exclude);
  } else {
    return generateNumber;
  }
};
let maxNumber = 100;
let minNumber = 1;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(maxNumber, minNumber, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [roundNumber, setRoundNumber] = useState([initialGuess]);

  const length = roundNumber.length;
  useEffect(() => {
    if (userNumber == currentGuess) {
      onGameOver(length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    maxNumber = 100;
    minNumber = 1;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong ....", [
        { text: "sorry !", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess;
    }

    const newNumber = generateRandomBetween(maxNumber, minNumber, currentGuess);
    setCurrentGuess(newNumber);
    setRoundNumber((prevRoundNumber) => [newNumber, ...prevRoundNumber]);
  };

  return (
    <View style={styles.container}>
      <Title text={"Oponent's Guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.card}>
        <TextDirection style={styles.textDirection}>
          Higher or Lower
        </TextDirection>
        <View style={styles.containerButtons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.containerList}>
        <FlatList
          data={roundNumber}
          renderItem={(itemData) => (
            <GuessLogItem
              item={itemData.item}
              roundNumber={length - itemData.index}
            />
          )}
          keyExtractor={(item, idx) => idx}
        ></FlatList>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  card: {
    marginTop: 2,
  },
  textDirection: {
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  containerButtons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  containerList: {
    padding: 16,
  },
});
