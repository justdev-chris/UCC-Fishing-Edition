// ui.js

import { getShopItems, buyItem, getCoins, getUpgrades } from './shop.js';

// Display a message to the user
function showMessage(text, emoji = "") {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = `${emoji} ${text}`;
}

// Update the shop UI with current items
function renderShop() {
  const shopDiv = document.getElementById("shop-items");
  shopDiv.innerHTML = "";

  const items = getShopItems();
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = `${item.name} - ${item.price} 🪙`;
    btn.title = item.description;
    btn.onclick = () => {
      const result = buyItem(item.id);
      showMessage(result.message, result.success ? "✅" : "❌");
      renderStats(); // Update coins/upgrades
    };
    shopDiv.appendChild(btn);
  });
}

// Update coin and upgrade display (optional for stats)
function renderStats() {
  const shop = document.getElementById("shop");
  let stats = document.getElementById("stats");

  if (!stats) {
    stats = document.createElement("div");
    stats.id = "stats";
    shop.insertBefore(stats, shop.firstChild);
  }

  const coins = getCoins();
  const upgrades = getUpgrades();
  stats.innerHTML = `
    <strong>Coins:</strong> ${coins} 🪙<br />
    <strong>Bait Level:</strong> x${upgrades.bait.toFixed(2)}<br />
    <strong>Rod Power:</strong> +${upgrades.rodPower.toFixed(2)}
  `;
}

export { showMessage, renderShop, renderStats };