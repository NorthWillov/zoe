// Modal.js
import React from "react";
import style from "./modal.module.css";

const Modal = ({ isOpen, onClose, email, phone }) => {
  const handleBackgroundClick = (e) => {
    // Close the modal only if the click occurs outside the modal content
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${style.modalOverlay} ${
            isOpen ? "active" : ""
          } modal-overlay`}
          onClick={handleBackgroundClick}
        >
          <div className={`${style.modalContent} ${isOpen ? "active" : ""}`}>
            <span>Email: {email}</span>
            <span>Telefon: {phone}</span>
            <button className={style.btn} onClick={onClose}>
              Zamknij
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
