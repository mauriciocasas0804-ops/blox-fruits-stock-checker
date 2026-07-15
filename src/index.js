import { config } from "./config.js";
import { getStock, searchFruit } from "./stock.js";
import { sendNotification } from "./notifier.js";


async function main() {
  console.log("🚀 Iniciando Blox Fruits Stock Checker...");

  const stock = await getStock();

  console.log("📦 Stock actual:");
  console.log(stock);

  const found = searchFruit(stock, config.fruitToSearch);

  if (found) {
    sendNotification(
      `¡La fruta ${config.fruitToSearch} está en stock!`
    );
  } else {
    console.log(
      `❌ ${config.fruitToSearch} no está disponible.`
    );
  }
}


main();
