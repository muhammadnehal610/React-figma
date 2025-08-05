import type React from "react";
import "./cartDrower.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrower: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <section className={`cart-drower-section ${isOpen ? "open" : ""}`}>
      <div className="cart-drower-container">
        {/* Cart Content */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </section>
  );
};

export default CartDrower;
