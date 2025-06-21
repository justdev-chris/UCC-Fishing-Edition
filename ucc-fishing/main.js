// main.js

import { getRandomFish } from './fish.js';
import { addCoins, getCoins } from './shop.js';
import { renderShop, renderStats, showMessage } from './ui.js';

// Emoji wave animation setup
let waveIndex = 0;
const wavePatterns = [
  '🌊🌊🌊🌊🌊🌊🌊🌊🌊',
  '🌊🌊🌊🌊🌊🌊🌊🌊🌊',
  '🌊🌊🌊🌊🌊🌊🌊🌊🌊',
];

// Fishing animation
function animateFishingRod(callback) {
  const pool = document.getElementById("fishing-pool");
  pool.textContent = "🎣...";

  setTimeout(() => {
    pool.textContent = wavePatterns[waveIndex % wavePatterns.length];
    waveIndex++;
    callback();
  }, 1000);
}

// Handle fishing button click
function catchFish() {
  animateFishingRod(() => {
    const fish = getRandomFish();
    const earnings = Math.floor(fish.value);
    addCoins(earnings);

    const msg = `You caught a ${fish.rarity} ${fish.name}! ${fish.emoji} +${earnings} 🪙`;
    showMessage(msg);
    renderStats();
  });
}

// Start the game
function initGame() {
  document.getElementById("fish-button").addEventListener("click", catchFish);
  renderShop();
  renderStats();
  showMessage("Ready to fish? Tap the button!", "🎣");
}

// Run after DOM is ready
window.onload = initGame;