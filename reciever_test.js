const express = require("express");
const axios = require("axios");

const app = express();

// Function to fetch and log EC2 response periodically
// const fetchAndLogEC2Data = async () => {
//     try {
//         const response = await axios.get("http://13.59.152.110:8080/");
//         console.log("Periodic EC2 Response:", response.data);
//     } catch (error) {
//         console.error("Error fetching EC2 data:", error.message);
//     }
// };

// Fetch EC2 data every 10 seconds
// setInterval(fetchAndLogEC2Data, 10000);

app.get("/fetch-ec2", async (req, res) => {
    console.log("Received request to /fetch-ec2"); 
    try {
        const response = await axios.get("http://13.59.152.110:8080/");
        console.log("Response from EC2:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data from EC2:", error.message);
        res.status(500).json({ error: "Failed to fetch data from EC2" });
    }
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);

    // Fetch data once on startup
    // fetchAndLogEC2Data();
});
