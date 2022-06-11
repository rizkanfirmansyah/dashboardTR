import React from "react";

const Card = ({label, children}) => {
  return (
    <div className="w-full bg-white shadow-sm p-8 rounded-md">
      <h1 className="text-xl font-medium mb-6">{label}</h1>
      {children}
    </div>
  );
};

export default Card;
