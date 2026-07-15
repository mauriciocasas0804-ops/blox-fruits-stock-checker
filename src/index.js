import { config } from "./config.js";
import { getStock, searchFruits } from "./stock.js";
import { sendNotification } from "./notifier.js";


async function main() {
  console.log("🚀 Iniciando Blox Fruits Stock Checker...");

  const stock = await getStock();

  console.log("📦 Stock actual:");
  console.log(stock);

  const foundFruits = searchFruits(
    stock,
    config.fruitsToSearch
  );

  if (foundFruits.length > 0) {
    sendNotification(
      `🔥 Frutas encontradas: ${foundFruits.join(", ")}`
    );
  } else {
    console.log(
      "❌ No hay ninguna fruta buscada disponible."
    );
  }
}


main();
