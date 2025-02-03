import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Menu.css'; 

function Menu() {
  return (
    <div>
      <ul>
        <li><Link to="acceuil">Acceuil</Link></li>
        <li><Link to="produits">Produits</Link></li>
        <li><Link to="panier">Panier</Link></li>
        <li><Link to="about">About us</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
