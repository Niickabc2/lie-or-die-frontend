let ws = new WebSocket('wss://lie-or-die-server.onrender.com');

ws.onopen = () => {
  console.log("✅ WebSocket verbunden");
  ws.send(JSON.stringify({ type: "join", partyId: "test-room" }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("📨 Nachricht empfangen:", data);
};

ws.onerror = (error) => {
  console.error("❌ WebSocket-Fehler:", error);
};

ws.onclose = () => {
  console.warn("⚠️ Verbindung geschlossen");
};
