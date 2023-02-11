import React from "react";
import * as AiIcons from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2023 Enoca</p>
      <div className="footer__contact">
        <ul>
          <li>
            <AiIcons.AiOutlineMail fill="#adefd1" />
            <p>ffurkankocabyk@hotmail.com</p>
          </li>
          <li>
            <AiIcons.AiOutlinePhone fill="#adefd1" />
            <p>+90 542 259 2721</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
