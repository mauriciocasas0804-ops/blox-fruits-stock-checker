import fs from "fs/promises";

const webhookURL = process.env.DISCORD_WEBHOOK;


async function getLastAlert() {
  try {
    const data = await fs.readFile(
      "./data/last-alert.json",
      "utf-8"
    );

    return JSON.parse(data).lastAlert;

  } catch {
    return [];
  }
}


async function saveLastAlert(fruits) {
  await fs.writeFile(
    "./data/last-alert.json",
    JSON.stringify(
      { lastAlert: fruits },
      null,
      2
    )
  );
}


function getFruitEmoji(fruit) {
  const emojis = {
    Dragon: "🐉",
    Kitsune: "🦊",
    Control: "🎛️"
  };

  return emojis[fruit] || "🍎";
}


export async function sendNotification(fruits) {

  const previous = await getLastAlert();


  const newFruits = fruits.filter(
    fruit => !previous.includes(fruit)
  );


  if (newFruits.length === 0) {
    console.log("⏭️ Ya se notificó esta fruta.");
    return;
  }


  await saveLastAlert(fruits);


  const message = newFruits
    .map(
      fruit =>
      `${getFruitEmoji(fruit)} **${fruit}** está disponible`
    )
    .join("\n");


  try {

    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:
`🚨 **Blox Fruits Stock Alert** 🚨

${message}

🤖 Blox Fruits Stock Checker`
      }),
    });


    console.log(
      "✅ Notificación enviada a Discord"
    );


  } catch(error) {

    console.error(
      "Error enviando notificación:",
      error.message
    );

  }
}
