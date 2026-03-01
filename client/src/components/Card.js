import React from "react";

export default function Card({ title, value }) {
  return (
    <div>
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}