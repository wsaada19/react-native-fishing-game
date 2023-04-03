import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { usePlayerStore } from "../store/playerStore";
import Button from "../components/Button";
import { isNextDay } from "../utils/dateUtils";
import { dailyRewards, RewardType } from "../data/rewards/dailyRewards";
import { usePlayerInventory } from "../store/playerInventory";

export default function DailyMotivation() {
  const rewardIndex = usePlayerStore((state) => state.rewardIndex);
  const unlockReward = usePlayerStore((state) => state.unlockReward);
  const lastDailyRewardTs = usePlayerStore((state) => state.lastDailyRewardTs);
  const addFishSticks = usePlayerInventory((state) => state.addFishSticks);
  const addItem = usePlayerInventory((state) => state.addItem);

  const onCollectRewards = () => {
    const currentDate = new Date();
    const lastRewardDate = new Date(lastDailyRewardTs);
    if (isNextDay(lastRewardDate, currentDate) || lastDailyRewardTs == "") {
      const reward = dailyRewards[rewardIndex];
      if (reward.type === RewardType.FISHSTICKS) {
        addFishSticks(reward.item.amount);
      } else {
        // ITEM
        addItem(reward.item);
      }
      unlockReward(currentDate.toISOString());
    } else {
      alert("only one reward per day!");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Motivation</Text>
      <View style={styles.listContainer}>
        {dailyRewards.map((reward, index) => {
          const itemUnlocked = rewardIndex > index;
          return (
            <View style={styles.listItem} key={index}>
              <Text
                style={[styles.text, itemUnlocked ? styles.strikethrough : {}]}
              >
                {reward.item.name}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Get daily rewards"
          onPress={onCollectRewards}
        />
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
  header: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    marginTop: 12,
    marginBottom: 36,
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
    flexBasis: "45%",
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 12,
    height: 72,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
