import React from "react";

import "./button.css";

export const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};
