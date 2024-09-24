import React from "react";

const Contact = () => {
  return (
    <div className="section">
      <div className="header">Get In Contact</div>
      <div className="text-center">
        <div className="fs-3 pt-3">Lets Talk!</div>
        <div className="contactLine">
          Email •{" "}
          <a href="mailto:jaramilloez2004@gmail.com">
            jaramilloez2004@gmail.com
          </a>
        </div>
        <div className="contactLine">
          Phone • <a href="tel:3853686809">380-368-6809</a>
        </div>
        <div className="contactLine">
          Social •{" "}
          <a href="www.linkedin.com/in/ezekiel-jaramillo-31a742233">LinkedIn</a>{" "}
          <strong>OR</strong>{" "}
          <a href="https://github.com/jaramilloez">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
