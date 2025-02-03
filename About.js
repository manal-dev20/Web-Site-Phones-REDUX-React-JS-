import React, { useState } from 'react';
import './styles/About.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/.test(value)) {
      setErrorMessage('Le nom ne doit contenir que des lettres.');
    } else {
      setErrorMessage('');
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Il faut remplir tous les champs.');
      setSuccessMessage('');
    } else if (!/^[A-Za-z ]*$/.test(formData.name)) {
      setErrorMessage('Le nom ne doit contenir que des lettres.');
      setSuccessMessage('');
    } else {
      
      setSuccessMessage('Message envoyé avec succès.');
      setErrorMessage('');
      
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-form">
      <h2>Contactez-nous</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
