const express = require("express");

const app = express();

app.post("/fetch-ec2", (req, res) => {
    res.json({ message: "Hello from the Ollama EC2 instance!" });
});

const PORT = 8080;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
