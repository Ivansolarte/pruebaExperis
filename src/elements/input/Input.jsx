import React from "react";

export const Input = ({value,onChange,placeholder,disabled=false, name}) => {
  return (
    <>
      <input
      className="border rounded h-9 border-slate-700 px-2"
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};
