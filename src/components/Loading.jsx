import React from "react";
import loading from "../assets/loading.png";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <img src={loading} />
      <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
        Loading..
      </p>
    </div>
  );
};

export default Loading;
