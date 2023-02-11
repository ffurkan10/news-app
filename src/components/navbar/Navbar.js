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
            <button onClick={() => setSelectedCategory("top")}>
              <span
                onClick={() => handleSelected("top")}
                style={
                  selected === "top"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Top
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("business")}>
              <span
                onClick={() => handleSelected("business")}
                style={
                  selected === "business"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Business
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("entertainment")}>
              <span
                onClick={() => handleSelected("entertainment")}
                style={
                  selected === "entertainment"
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
            <button onClick={() => setSelectedCategory("politics")}>
              <span
                onClick={() => handleSelected("politics")}
                style={
                  selected === "politics"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Politics
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("health")}>
              <span
                onClick={() => handleSelected("health")}
                style={
                  selected === "health"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Health
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("sports")}>
              <span
                onClick={() => handleSelected("sports")}
                style={
                  selected === "sports"
                    ? { color: "black", backgroundColor: "white" }
                    : {}
                }
              >
                Sports
              </span>
            </button>
          </li>
          <li>
            <button onClick={() => setSelectedCategory("technology")}>
              <span
                onClick={() => handleSelected("technology")}
                style={
                  selected === "technology"
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
