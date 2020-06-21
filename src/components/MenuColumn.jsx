import React from "react";

const MenuColumn = ({ children, title }) => {
  return (
    <div className="column">
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
};

export default MenuColumn;
