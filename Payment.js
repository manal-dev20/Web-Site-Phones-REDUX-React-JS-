import React, { useState } from 'react';
import "./styles/payment.css"

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !expirationDate || !cvv) {
      setIsSuccess(false);
      setMessage('Veuillez remplir tous les champs.');
      return;
    }

    if (!/^[0-9]{16}$/.test(cardNumber.replace(/\s/g, ''))) {
      setIsSuccess(false);
      setMessage('Le numéro de carte doit contenir exactement 16 chiffres.');
      return;
    }

    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expirationDate)) {
      setIsSuccess(false);
      setMessage("La date d'expiration doit être au format MM/YY.");
      return;
    }

    if (!/^[0-9]{3}$/.test(cvv)) {
      setIsSuccess(false);
      setMessage('Le CVV doit contenir exactement 3 chiffres.');
      return;
    }

    setIsSuccess(true);
    setMessage('Paiement effectué avec succès !');
  };

  return (
    <div className="payment-page">
      <h2>Page de Paiement</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de Carte</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength="19"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Date d'Expiration</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="XXX"
            maxLength="3"
          />
        </div>

        {message && (
          <p className={isSuccess ? "message-success" : "message-error"}>
            {message}
          </p>
        )}

        <button type="submit">Valider le Paiement</button>
      </form>
    </div>
  );
};

export default Payment;