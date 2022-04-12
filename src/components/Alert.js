import { useState } from "react";

const Alert = ({ alert, type }) => {

  return (
    <div className="alert-container">
      <div className={alert ? "alert" : "alert hidden"}>{type}</div>
    </div>
  );
};

export default Alert;
