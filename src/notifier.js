const webhookURL = process.env.DISCORD_WEBHOOK;


export async function sendNotification(message) {
  if (!webhookURL) {
    console.error("No existe el webhook de Discord");
    return;
  }

  try {
    await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
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
