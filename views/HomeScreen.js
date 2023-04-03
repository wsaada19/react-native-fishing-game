import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import ImageViewer from "../components/ImageViewer";
import IconButton from "../components/IconButton";
import CircleButton from "../components/CircleButton";
import { usePlayerInventory } from "../store/playerInventory";

const PlaceholderImage = require("../assets/background-image.png");

export default function HomeScreen({ navigation }) {
  const fishSticks = usePlayerInventory((state) => state.fishSticks);

  return (
    <View style={styles.container}>
      <View style={styles.money}>
        <Text style={styles.moneyText}>{`$${fishSticks}`}</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton
            icon="backpack"
            label="Items"
            onPress={() => navigation.navigate("PlayerInventory")}
          />
          <CircleButton
            onPress={() => navigation.navigate("DailyMotivation")}
          />
          <IconButton
            icon="save-alt"
            label="Save"
            onPress={() => navigation.navigate("DailyMotivation")}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13265C",
    alignItems: "center",
    justifyContent: "center",
  },
  money: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  moneyText: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 74,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
