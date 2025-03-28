const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from the Ollama EC2 instance!" });
});

const PORT = 80;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
