import React from "react";

const RedAlert = ({ alert_message }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">{alert_message}</strong>
      
    </div>
  );
};

export default RedAlert;
