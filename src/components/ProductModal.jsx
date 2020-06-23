import React, { useState } from "react";
import Modal from "react-modal";

const ProductModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen}>
        <h1>Modal Title</h1>
      </Modal>
    </>
  );
};

export default ProductModal;
