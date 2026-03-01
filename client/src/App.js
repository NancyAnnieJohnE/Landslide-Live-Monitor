// client/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import LineChart from "./components/LineChart";
import RiskGauge from "./components/RiskGauge";
import "./App.css";

function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [city, setCity] = useState("Chennai");
  const [coordinates, setCoordinates] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date());
  const [history, setHistory] = useState({
    rainfall: [],
    soil: [],
    temperature: [],
    slope: [],
    vibration: [],
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async (firstFetch = false) => {
      if (firstFetch) setLoading(true);
      try {
        let url = `http://localhost:5000/api/data?`;
        if (coordinates) url += `lat=${coordinates.lat}&lon=${coordinates.lon}`;
        else url += `city=${city}`;
        const res = await axios.get(url);
        setData(res.data);
        setHistory((prev) => ({
          rainfall: [...prev.rainfall, res.data.rainfall].slice(-20),
          soil: [...prev.soil, res.data.soil].slice(-20),
          temperature: [...prev.temperature, res.data.temperature].slice(-20),
          slope: [...prev.slope, res.data.slope].slice(-20),
          vibration: [...prev.vibration, res.data.vibration].slice(-20),
        }));
      } catch (err) {
        alert("Error fetching data. Make sure city or coordinates are valid.");
      }
      if (firstFetch) setLoading(false);
    };

    fetchData(true);
    const interval = setInterval(() => fetchData(false), 5000);
    return () => clearInterval(interval);
  }, [city, coordinates]);

  const handleSearch = () => {
    const value = inputLocation.trim();
    if (!value) return alert("Enter city or coordinates");
    if (value.includes(",")) {
      const parts = value.split(",");
      if (parts.length === 2) {
        const lat = parseFloat(parts[0]);
        const lon = parseFloat(parts[1]);
        if (!isNaN(lat) && !isNaN(lon)) {
          setCoordinates({ lat, lon });
          setCity("");
          return;
        }
      }
      alert("Invalid coordinates. Use format: lat,lon");
    } else {
      setCity(value);
      setCoordinates(null);
    }
  };

  if (loading || !data) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div className="app">
      <header>
        <h1>🌍 Smart Landslide AI Monitoring</h1>
        <p style={{ color: "#00e0ff" }}>Live: {time.toLocaleString()}</p>
        <div className="search">
          <input
            type="text"
            placeholder="City or GPS (lat,lon)"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <h3 style={{ color: "#fff" }}>Current Data for: {data.city}</h3>
      </header>

      <section className="cards">
        <Card title="🌧 Rainfall" value={`${data.rainfall} mm`} />
        <Card title="🌡 Temperature" value={`${data.temperature} °C`} />
        <Card title="💧 Soil Moisture" value={`${data.soil} %`} />
        <Card title="📐 Slope" value={`${data.slope}°`} />
        <Card title="📊 Vibration" value={data.vibration} />
        <Card title="⚠ Risk Level" value={data.risk.level} />
      </section>

      <section className="charts">
        <div><LineChart label="Rainfall (mm)" dataPoints={history.rainfall} /></div>
        <div><LineChart label="Soil Moisture (%)" dataPoints={history.soil} borderColor="#ff9900" /></div>
        <div><LineChart label="Temperature (°C)" dataPoints={history.temperature} borderColor="#ff3333" /></div>
        <div><LineChart label="Slope (°)" dataPoints={history.slope} borderColor="#33ff33" /></div>
        <div><LineChart label="Vibration" dataPoints={history.vibration} borderColor="#9933ff" /></div>
      </section>

      <section className="gauge">
        <RiskGauge risk={data.risk} />
      </section>
    </div>
  );
}

export default App;