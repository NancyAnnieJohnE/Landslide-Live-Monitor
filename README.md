# Landslide-Live-Monitor
A **full-stack web application** to monitor landslide risk in real-time using environmental parameters. The dashboard provides live data visualization, trend analysis, and risk assessment for any city or GPS coordinates worldwide using API.
 

---

## **Features**

- Real-time monitoring of environmental parameters affecting landslide risk:  
  - Rainfall (mm)  
  - Soil Moisture (%)  
  - Temperature (°C)  
  - Slope (°)  
  - Vibration (arbitrary units)  
- Anomaly Detection: 
Identifies abnormal patterns in environmental and structural parameters that indicate potential landslides.

- Risk Classification: 
Classifies monitored areas into Low, Moderate, and High Risk for better decision-making.

- Visual Dashboard: 
Displays maps, graphs, and charts showing current risk levels and trends over time.

- Alerts & Notifications (Optional / future expansion): 
Sends warnings to authorities or residents when a high-risk condition is detected.

- Infrastructure Health Analysis: 
Evaluates the operational condition of urban slopes and nearby infrastructure to support maintenance and safety planning.

- Data-Driven Insights: 
Provides historical analysis and trends to predict future risks and plan preventive actions.
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

```
## Installation

### 1. Clone the repository

```bash
git clone https://github.com/NancyAnnieJohnE/Landslide-Live-Monitor.git
cd Landslide-live-monitor
```
### 2. Backend setup
cd server
npm install
npm start

Backend runs at: http://localhost:5000

### 3. Frontend setup
cd ../client
npm install
npm start

Frontend runs at: http://localhost:3000

## Usage

 - Open the frontend in your browser: http://localhost:3000
 - Enter a city name or GPS coordinates (lat,lon)
 - Dashboard displays live readings, charts, and risk levels
 - Charts update automatically when new data is fetched

## Deployment

 - Frontend only: Can be deployed on GitHub Pages, Netlify, or Vercel
 - Full-stack (frontend + backend): Use Render, Railway, or Heroku
 - Update the backend API URL in client/src/App.js before deployment

##Demo and Document Link
https://drive.google.com/drive/folders/1wVWx7P_pTs2zm4zoCE_uzrWCHenIuzhs?usp=drive_link
