import { useState } from "react";

const Alert = ({ alert, type }) => {

  console.log("alert is", alert)

  return (
    <div className="alert-container">
      <div className={alert ? "alert" : "alert hidden"}>{type}</div>
    </div>
  );
};

export default Alert;
