export async function getStock() {
  // Stock de prueba (después lo conectaremos al stock real)
  const stock = [
    "Rocket",
    "Spin",
    "Ghost"
  ];

  return stock;
}


export function searchFruits(stock, fruitsToSearch) {
  return fruitsToSearch.filter((fruit) =>
    stock.includes(fruit)
  );
}
