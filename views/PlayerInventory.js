import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { MaxInventorySize, usePlayerInventory } from "../store/playerInventory";

export default function PlayerInventory() {
  const items = usePlayerInventory((state) => state.items);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Items</Text>
      <Text>{`${items.length} / ${MaxInventorySize}`}</Text>
      <View style={styles.listContainer}>
        {items.map((item, index) => {
          return (
            <View style={styles.listItem} key={index}>
              <Text style={styles.itemHeader}>{item.name}</Text>
              <Text style={styles.subHeader}>{item.description}</Text>
            </View>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
  },
  listContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 6,
    justifyContent: "space-around",
    gap: 10,
    marginBottom: 72,
  },
  listItem: {
    flexBasis: "85%",
    borderColor: "#c0c0c0",
    borderBottomWidth: 1,
    marginTop: 12,
  },
  itemHeader: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 12,
    marginBottom: 6,
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 12,
  },
});
