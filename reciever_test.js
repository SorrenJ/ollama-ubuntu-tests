const express = require("express");
const axios = require("axios");

const app = express();

app.get("/fetch-ec2", async (req, res) => {
    console.log("Received request to /fetch-ec2"); 
    try {
        const response = await axios.get("http://13.59.152.110:80/");

        console.log("Response from EC2:", response.data); // Correct logging
        res.json(response.data); // Send response to client
    } catch (error) {
        console.error("Error fetching data from EC2:", error.message);
        res.status(500).json({ error: "Failed to fetch data from EC2" });
    }
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
});
