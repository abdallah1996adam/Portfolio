import React from "react";

import "./style.css";

const Modal = ({ closeModal }) => {
  return (
    <>
      <form className="contact-form">
        <button
          id="close-btn"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>

        <div className="form-content">
          <a
            className="contact-btn"
            href="https://www.linkedin.com/in/abdallah-adam0"
          >
            Linkedin
          </a>
          <a className="contact-btn" href="https://github.com/abdallah1996adam">
            GitHub
          </a>
        </div>
      </form>
    </>
  );
};

export default Modal;
