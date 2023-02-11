import React from "react";
import Input from "../input/Input";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Header = ({ setSearchTerm, searchTerm }) => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container__name">
          <Link to="/about">
            <h2>Fatih Furkan Kocabıyık</h2>
          </Link>
          <div className="header__container__name__icon">
            <span>click to learn about me</span>
            <AiIcons.AiOutlineArrowUp />
          </div>
        </div>
        <Input setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Header;
