export async function getStock() {
  // Aquí después conectaremos la API o fuente de datos del stock

  const stock = [
    "Rocket",
    "Spin",
    "Flame",
    "Ice"
  ];

  return stock;
}


export function searchFruit(stock, fruitName) {
  return stock.includes(fruitName);
}
