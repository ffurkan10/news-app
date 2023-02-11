import React from "react";

const Input = ({ setSearchTerm, searchTerm }) => {
  return (
    <div>
      {" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
