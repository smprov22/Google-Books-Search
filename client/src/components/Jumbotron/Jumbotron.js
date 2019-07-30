import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 30, textAlign: "center", color: "#1a237e" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
