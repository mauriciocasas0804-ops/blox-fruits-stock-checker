export async function getStock() {
  try {
    const response = await fetch(
      "https://blox-fruits-api.onrender.com/api/bloxfruits"
    );

    const data = await response.json();

    return Object.keys(data);

  } catch (error) {
    console.error("Error obteniendo frutas:", error);
    return [];
  }
}


export function searchFruits(stock, fruitsToSearch) {
  return fruitsToSearch.filter((fruit) =>
    stock.includes(fruit)
  );
}
