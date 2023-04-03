import { RARITY } from "./itemRarity";

export const sunGlasses = {
  name: "Sunglasses",
  description: "Too cool to fish",
};

export const fishTacos = {
  name: "Fish Tacos",
  description: "Yummmmm",
};

export const getBait = (
  multiplier = 1,
  amount = 10,
  rarity = RARITY.COMMON
) => {
  return {
    name: "Bait",
    description: "This is how you catch ur fish!",
    multiplier,
    amount,
    rarity,
  };
};

export const getFishSticks = (amount = 10) => {
  return {
    name: "Fish Sticks",
    description: "Our weird currency...",
    amount,
  };
};

export const defaultInventory = [sunGlasses, fishTacos, getBait()];
