import React from "react";

const Spinner = () => {
  return (
    <div className="cds-spinner-container">
      <svg className="cds-loading-spinner" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="44" />
      </svg>
    </div>
  );
};

export default Spinner;
