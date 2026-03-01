
// server/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "d18584a3b74c9a3dd395788846483b1e";

app.get("/api/data", async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    let url;

    if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    } else if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    } else {
      return res.status(400).json({ error: "Provide city or lat/lon" });
    }

    const response = await axios.get(url);
    const weather = response.data;

    // Simulate environmental parameters for landslide risk
    const soil = Math.floor(Math.random() * 100); // %
    const slope = Math.floor(Math.random() * 60); // degrees
    const vibration = Math.floor(Math.random() * 10); // arbitrary units

    // Risk calculation
    let risk = "LOW";
    if (soil > 70 || slope > 45) risk = "HIGH";
    else if (soil > 50 || slope > 30) risk = "MEDIUM";

    res.json({
      city: weather.name || `${lat},${lon}`,
      temperature: weather.main.temp,
      rainfall: weather.rain?.["1h"] || 0,
      soil,
      slope,
      vibration,
      risk: { level: risk },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error fetching data from API" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));