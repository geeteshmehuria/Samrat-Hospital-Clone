import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [isCardValid, setIsCardValid] = useState(true); // Initially set to true
  const [isCardNumberFocused, setIsCardNumberFocused] = useState(false);
  const [isCardExpiryFocused, setIsCardExpiryFocused] = useState(false);
  const [isCardCvcFocused, setIsCardCvcFocused] = useState(false);

  const handleCardNumberChange = (e) => {
    // Remove non-numeric characters from the input
    const cleanedInput = e.target.value.replace(/\D/g, "");
    setCardNumber(cleanedInput);

    // Validate card number (16 digits)
    setIsCardValid(cleanedInput.length === 16);
  };

  const handleCardExpiryChange = (e) => {
    // Remove non-numeric characters from the input
    const cleanedInput = e.target.value.replace(/\D/g, "");

    // Check if the input matches MMYY format (e.g., MMYY where MM is between 01 and 12)
    if (/^(0[1-9]|1[0-2])[0-9]{2}$/.test(cleanedInput)) {
      setCardExpiry(cleanedInput);
      setIsCardValid(true); // Valid format
    } else {
      setCardExpiry(cleanedInput);
      setIsCardValid(false); // Invalid format
    }
  };

  const handleCardCvcChange = (e) => {
    // Remove non-numeric characters from the input
    const cleanedInput = e.target.value.replace(/\D/g, "");
    setCardCvc(cleanedInput);

    // Validate CVC (e.g., 3 or 4 digits)
    setIsCardValid(cleanedInput.length === 3 || cleanedInput.length === 4);
  };

  return (
    <div className="full-page">
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Appointment</li>
        </ul>
      </div>
      <div className="payment-form">
        <h1>Payment</h1>
        <div className="form-inputs">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            onFocus={() => setIsCardNumberFocused(true)}
            onBlur={() => setIsCardNumberFocused(false)}
          />
          {isCardNumberFocused && !isCardValid && (
            <div className="error-message">
              Please enter a valid card number
            </div>
          )}
        </div>
        <div className="form-inputs">
          <label>Expiration Date (MMYY)</label>
          <input
            type="text"
            value={cardExpiry}
            onChange={handleCardExpiryChange}
            maxLength="4"
            onFocus={() => setIsCardExpiryFocused(true)}
            onBlur={() => setIsCardExpiryFocused(false)}
          />
          {isCardExpiryFocused && !isCardValid && (
            <div className="error-message">Please enter a valid MMYY date</div>
          )}
        </div>
        <div className="form-inputs">
          <label>CVC</label>
          <input
            type="text"
            value={cardCvc}
            onChange={handleCardCvcChange}
            maxLength="4"
            onFocus={() => setIsCardCvcFocused(true)}
            onBlur={() => setIsCardCvcFocused(false)}
          />
          {isCardCvcFocused && !isCardValid && (
            <div className="error-message">Please enter a valid CVC</div>
          )}
        </div>
        <button disabled={!isCardValid}>Submit Payment</button>
      </div>
    </div>
  );
};

export default PaymentForm;
