import React from "react";

const Matzip = ({ key, title, category }) => {
  return (
    <div>
      <p>가게명: {title}</p>
      <p>{category}</p>
    </div>
  );
};

export default Matzip;
