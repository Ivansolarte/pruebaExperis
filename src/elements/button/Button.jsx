import React from "react";

export const Button = ({ text, onclick, type="success" }) => {
  return (
    <>
      <button 
      className={`
        border h-11 px-8 rounded-lg mx-3
         ${type =="success"?"bg-green-500":"bg-red-400"}
         ${type =="success"?"hover:bg-green-300":"hover:bg-red-200"}
         `}
      onClick={onclick}
      >
        {text}
      </button>
    </>
  );
};
