import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultInventory } from "../data/items/itemData";

export const MaxInventorySize = 18;

export const usePlayerInventory = create(
  persist(
    (set) => ({
      fishSticks: 100,
      items: [...defaultInventory],
      // update to handle stacking the same item
      addItem: (item) => {
        set((state) => {
          if (state.items.length >= MaxInventorySize) {
            return; // Not sure if this is going to work?
          }
          return {
            items: [...state.items, item],
          };
        });
      },
      addFishSticks: (amount) =>
        set((state) => ({
          fishSticks: state.fishSticks + amount,
        })),
    }),
    {
      name: "player-inventory",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
