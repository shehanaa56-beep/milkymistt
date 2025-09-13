import React from "react";

export default function Checkout() {
  return (
    <div className="checkout-pagee">
      <h2>Checkout</h2>
      <p className="checkout-pageee">Please select your payment method:</p>

      <div className="payment-options">
        <button onClick={() => alert("Pay with Credit Card")}>Credit Card</button>
        <button onClick={() => alert("Pay with PayPal")}>PayPal</button>
        <button onClick={() => alert("Pay with UPI")}>UPI</button>
        <button onClick={() => alert("Pay at Store")}>Pay at Store</button>
      </div>
    </div>
  );
}
