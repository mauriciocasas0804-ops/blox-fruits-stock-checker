const webhookURL = process.env.DISCORD_WEBHOOK;


function getFruitEmoji(fruit) {
  const emojis = {
    Dragon: "🐉",
    Kitsune: "🦊",
    Control: "🎛️"
  };

  return emojis[fruit] || "🍎";
}


export async function sendNotification(fruits) {
  if (!webhookURL) {
    console.error("No existe el webhook de Discord");
    return;
  }

  const time = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City"
  });

  const message = fruits
    .map(
      (fruit) =>
        `${getFruitEmoji(fruit)} **${fruit}** está disponible`
    )
    .join("\n");


  const content = `
🚨 **Blox Fruits Stock Alert** 🚨

${message}

⏰ Revisado:
${time}

🤖 Blox Fruits Stock Checker
`;


  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    });

    console.log("✅ Notificación enviada a Discord");

  } catch (error) {
    console.error(
      "Error enviando notificación:",
      error.message
    );
  }
}
