import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [focused, setFocused] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.complete ? e.value : "");
  };

  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.complete ? e.value : "");
  };

  const handleCardCvcChange = (e) => {
    setCardCvc(e.complete ? e.value : "");
  };

  return (
    <div>
      <div className="credit-card-form">
        <Cards
          number={cardNumber}
          name="Your Name"
          expiry={cardExpiry}
          cvc={cardCvc}
          focused={focused}
        />
        <div className="form-inputs">
          <label>Card Number</label>
          <CardNumberElement
            onChange={(e) => handleCardNumberChange(e)}
            onFocus={() => setFocused("number")}
            onBlur={() => setFocused("")}
          />
        </div>
        <div className="form-inputs">
          <label>Expiration Date</label>
          <CardExpiryElement
            onChange={(e) => handleCardExpiryChange(e)}
            onFocus={() => setFocused("expiry")}
            onBlur={() => setFocused("")}
          />
        </div>
        <div className="form-inputs">
          <label>CVC</label>
          <CardCvcElement
            onChange={(e) => handleCardCvcChange(e)}
            onFocus={() => setFocused("cvc")}
            onBlur={() => setFocused("")}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
