import React from "react";

export default function RiskGauge({ risk }) {
  const color =
    risk.level === "LOW"
      ? "green"
      : risk.level === "MODERATE"
      ? "orange"
      : risk.level === "HIGH"
      ? "red"
      : "purple";

  return (
    <div style={{ color, fontSize: "2rem", fontWeight: "bold" }}>
      ⚠ Risk Score: {risk.score} / 100 ({risk.level})
    </div>
  );
}