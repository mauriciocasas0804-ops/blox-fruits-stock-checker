import fs from "fs/promises";


export async function getStock() {
  try {
    const data = await fs.readFile(
      "./data/stock.json",
      "utf-8"
    );

    const json = JSON.parse(data);

    return json.stock;

  } catch (error) {
    console.error("Error leyendo stock:", error.message);
    return [];
  }
}


export function searchFruits(stock, fruitsToSearch) {
  return fruitsToSearch.filter((fruit) =>
    stock.includes(fruit)
  );
}
