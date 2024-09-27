import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between fs-5 py-1">
      <div>&copy; 2024 - All Rights Reserved</div>
      <button
        id="toTop"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        Back to top <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};

export default Footer;
