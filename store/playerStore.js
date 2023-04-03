import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const usePlayerStore = create(
  persist(
    (set) => ({
      lastDailyRewardTs: "",
      rewardIndex: 2, // index references the next reward in the array
      unlockReward: (timeStamp) =>
        set((state) => ({
          rewardIndex: state.rewardIndex + 1,
          lastDailyRewardTs: timeStamp,
        })),
    }),
    {
      name: "player-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
