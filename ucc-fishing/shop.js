// shop.js

import { fishTypes } from './fish.js';

// Player’s current coins and upgrades
let playerCoins = 0;
const upgrades = {
  bait: 1,       // Multiplier for fish value
  rodPower: 1,   // Chance to catch rare fish (not used yet, can expand later)
};

// Shop items available for purchase
const shopItems = [
  {
    id: 'betterBait',
    name: 'Better Bait 🎣',
    description: 'Increases fish value by 1.5x',
    price: 20,
    effect: () => {
      upgrades.bait *= 1.5;
    },
  },
  {
    id: 'strongerRod',
    name: 'Stronger Rod 🐱',
    description: 'Improves your chance to catch rare fish (coming soon)',
    price: 50,
    effect: () => {
      upgrades.rodPower += 0.2; // Placeholder, not hooked yet
    },
  },
  {
    id: 'catToys',
    name: 'Cat Toys 🧶',
    description: 'Your cat cheers you on, giving motivation boosts (flavor)',
    price: 10,
    effect: () => {
      // Flavor only, no actual effect for now
      console.log('Your cat is happy!');
    },
  },
];

// Get shop items to display in UI
function getShopItems() {
  return shopItems;
}

// Attempt to buy an item by ID
function buyItem(id) {
  const item = shopItems.find(i => i.id === id);
  if (!item) return { success: false, message: 'Item not found' };
  if (playerCoins < item.price) return { success: false, message: 'Not enough coins' };

  playerCoins -= item.price;
  item.effect();

  return { success: true, message: `Bought ${item.name}!` };
}

// Functions to get/set player coins
function addCoins(amount) {
  playerCoins += amount;
}
function getCoins() {
  return playerCoins;
}
function setCoins(amount) {
  playerCoins = amount;
}

// Get upgrade info (for UI display)
function getUpgrades() {
  return { ...upgrades };
}

export { getShopItems, buyItem, addCoins, getCoins, setCoins, getUpgrades };