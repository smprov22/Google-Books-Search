import React from "react";
import "./style.css";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="waves-effect waves-light btn indigo darken-4">
      {props.children}
    </button>
  );
}
