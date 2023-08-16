import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./util/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [isGameOver, setGameOver] = useState(false);
  const [roundNumber, setRoundNumber] = useState(0);

  const [fontsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  const pickedNumber = (number) => {
    setUserNumber(number);
  };

  let screen = <StartGameScreen onPress={pickedNumber} />;

  const handleGameOver = (numberOfRounded) => {
    setGameOver(true);
    setRoundNumber(numberOfRounded);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setRoundNumber(0);
    setGameOver(false);
  };

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (userNumber && isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={roundNumber}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, Colors.secondary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.ImageBackground}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  rootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.15,
  },
});
