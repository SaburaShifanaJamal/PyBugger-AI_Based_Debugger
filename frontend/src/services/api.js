// src/services/api.js
// If your backend is running locally on the same machine, use localhost
const BASE_URL = "https://overhatted-karena-transcendentally.ngrok-free.dev"; 

export async function debugCode(code) {
  try {
    const res = await fetch(`${BASE_URL}/debug`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}

export async function explainError(line, errorType, message) {
  try {
    const res = await fetch(`${BASE_URL}/explain`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        line: String(line),
        error: errorType,
        message: message,
      }),
    });
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return { explanation: "Failed to contact AI teacher." };
  }
}