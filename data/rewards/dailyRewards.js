import {
  fishTacos,
  getBait,
  getFishSticks,
  sunGlasses,
} from "../items/itemData";

export const RewardType = {
  ITEM: "ITEM",
  FISHSTICKS: "FISHSTICKS",
};
export const dailyRewards = [
  { type: RewardType.ITEM, item: sunGlasses },
  { type: RewardType.ITEM, item: fishTacos },
  { type: RewardType.FISHSTICKS, item: getFishSticks(100) },
  { type: RewardType.FISHSTICKS, item: getFishSticks(200) },
  { type: RewardType.ITEM, item: getBait() },
  { type: RewardType.FISHSTICKS, item: getFishSticks(300) },
];
