const express = require("express");
const axios = require("axios");

const app = express();

app.get("/fetch-ec2", async (req, res) => {
    try {
        // Replace with your actual EC2 public IP
        const response = await axios.get("http://13.59.152.110:8080/");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data from EC2" });
    }
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
});
