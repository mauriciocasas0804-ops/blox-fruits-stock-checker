import { getStock, searchFruits } from "./stock.js";
import { sendNotification } from "./notifier.js";
import { config } from "./config.js";


async function main() {

  console.log("🚀 Iniciando Blox Fruits Stock Checker...");

  const stock = await getStock();

  console.log("📦 Stock actual:");
  console.log(stock);


  const availableFruits = searchFruits(
    stock,
    config.fruitsToWatch
  );


  if (availableFruits.length > 0) {

    await sendNotification(availableFruits);

  } else {

    console.log(
      "❌ No hay ninguna fruta buscada disponible."
    );

  }

}


main();
