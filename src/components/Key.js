import React from "react";


const Key = ({ children, value }) => {
  return <button className="key">{children || value}</button>;
};

export default Key;
