// fish.js

const fishTypes = [
  { name: "Tiny Minnow", rarity: "Common", emoji: "🐟", value: 1 },
  { name: "Goldfish", rarity: "Common", emoji: "🐠", value: 2 },
  { name: "Salmon", rarity: "Uncommon", emoji: "🐡", value: 5 },
  { name: "Catfish", rarity: "Uncommon", emoji: "🐟🐟", value: 7 },
  { name: "Rainbow Trout", rarity: "Rare", emoji: "🌈🐟", value: 12 },
  { name: "Koi", rarity: "Rare", emoji: "🐠✨", value: 20 },
  { name: "Dragon Fish", rarity: "Epic", emoji: "🐉🐟", value: 50 },
  { name: "Golden Carp", rarity: "Legendary", emoji: "🐟👑", value: 100 },
];

function getRandomFish() {
  // Weighted random chance based on rarity (simplified)
  // Common = 50%, Uncommon = 25%, Rare = 15%, Epic = 7%, Legendary = 3%
  const rand = Math.random() * 100;
  if (rand < 50) {
    // Pick one common
    const commonFish = fishTypes.filter(f => f.rarity === "Common");
    return commonFish[Math.floor(Math.random() * commonFish.length)];
  } else if (rand < 75) {
    // Pick uncommon
    const uncommonFish = fishTypes.filter(f => f.rarity === "Uncommon");
    return uncommonFish[Math.floor(Math.random() * uncommonFish.length)];
  } else if (rand < 90) {
    // Rare
    const rareFish = fishTypes.filter(f => f.rarity === "Rare");
    return rareFish[Math.floor(Math.random() * rareFish.length)];
  } else if (rand < 97) {
    // Epic
    const epicFish = fishTypes.filter(f => f.rarity === "Epic");
    return epicFish[Math.floor(Math.random() * epicFish.length)];
  } else {
    // Legendary
    const legendaryFish = fishTypes.filter(f => f.rarity === "Legendary");
    return legendaryFish[0];
  }
}

export { fishTypes, getRandomFish };