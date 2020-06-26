import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const AppPageBanner = ({ title }) => {
  return (
    <div className="app-page-banner">
      <h2>{title}</h2>
      <nav>
        <FaHome />
        <Link to="/">Home</Link>
        <span>
          <FaChevronRight />
        </span>
        <span>{title}</span>
      </nav>
    </div>
  );
};

export default AppPageBanner;
