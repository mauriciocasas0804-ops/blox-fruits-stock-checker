export async function getStock() {
  try {
    const response = await fetch(
      "https://blox-fruits-api.onrender.com/api/bloxfruits/stock"
    );

    const data = await response.json();

    const stock = JSON.parse(data);

    return stock;
  } catch (error) {
    console.error("Error obteniendo stock:", error);
    return [];
  }
}


export function searchFruits(stock, fruitsToSearch) {
  return fruitsToSearch.filter((fruit) =>
    stock.includes(fruit)
  );
}
