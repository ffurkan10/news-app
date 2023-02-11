import React, { useState } from "react";

const Navbar = ({ setSelectedCategory }) => {
  const [selected, setSelected] = useState("");

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul>
          <li>
            <button onClick={() => setSelectedCategory("")}>
              <span
                onClick={() => handleSelected("")}
                style={
                  selected === ""
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                All
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Business")}>
              <span
                onClick={() => handleSelected("Business")}
                style={
                  selected === "Business"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Business
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Entertainment")}>
              <span
                onClick={() => handleSelected("Entertainment")}
                style={
                  selected === "Entertainment"
                    ? {
                        color: "black",
                        backgroundColor: "white",
                      }
                    : {}
                }
              >
                Entertainment
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("General")}>
              <span
                onClick={() => handleSelected("General")}
                style={
                  selected === "General"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                General
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Health")}>
              <span
                onClick={() => handleSelected("Health")}
                style={
                  selected === "Health"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Health
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Science")}>
              <span
                onClick={() => handleSelected("Science")}
                style={
                  selected === "Science"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Science
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Sports")}>
              <span
                onClick={() => handleSelected("Sports")}
                style={
                  selected === "Sports"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Sports
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("Technology")}>
              <span
                onClick={() => handleSelected("Technology")}
                style={
                  selected === "Technology"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Technology
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
