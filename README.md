# Landslide-Live-Monitor
A **full-stack web application** to monitor landslide risk in real-time using environmental parameters. The dashboard provides live data visualization, trend analysis, and risk assessment for any city or GPS coordinates worldwide.
 

---

## **Features**

- Real-time monitoring of environmental parameters affecting landslide risk:  
  - Rainfall (mm)  
  - Soil Moisture (%)  
  - Temperature (°C)  
  - Slope (°)  
  - Vibration (arbitrary units)  
- Interactive dashboard with:  
  - Info cards for each parameter  
  - Line charts for trends over time  
  - Donut/pie chart for risk levels (LOW, MEDIUM, HIGH)  
- Supports **city name** or **GPS coordinates (lat,lon)** input  
- Live updating charts every few seconds  
---

## **Technologies Used**

- **Frontend:** React.js, React Hooks  
- **Charts:** Chart.js, react-chartjs-2  
- **Backend:** Node.js, Express.js, Axios  
- **Styling:** CSS, responsive design  
- **Version Control:** Git & GitHub  

---

## **Folder Structure**

```text
landslide-ai/
├── server/                ← Backend (Node.js + Express)
│   ├── index.js
│   └── package.json
├── client/                ← Frontend (React)
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       ├── index.css
│       └── components/
│           ├── Card.js
│           ├── Chart.js
│           ├── LineChart.js
│           └── RiskGauge.js
├── client/README.md
└── .gitignore
