import React from "react";

const GreenAlert = ({ alert_message }) => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">{alert_message}</strong>
      
    </div>
  );
};

export default GreenAlert;
