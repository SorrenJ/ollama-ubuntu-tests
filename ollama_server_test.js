const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Ollama Chatbot Test Server is running!");
});

// Chatbot test route
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "gemma2:2b",
      prompt: message,
    });

    res.json({ response: response.data.response });
  } catch (error) {
    console.error("Error communicating with Ollama:", error.message);
    res.status(500).json({ error: "Failed to get response from Ollama" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
