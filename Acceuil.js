import React from 'react';
import './styles/Acceuil.css'; 
import ihpne14 from './images/ihpne14.jpg'; 
import SamsungGalaxyS23 from './images/Samsung Galaxy S23.jpg'; 
import GooglePixel7 from './images/Google Pixel 7.jpg'; 
import { useNavigate } from 'react-router-dom';

function Acceuil() {
  const navigate = useNavigate();
  const handleDiscoverProducts = () => {
    navigate('/produits'); 
  };

  return (
    <div className="acceuil">
      <div className="banner">
        <h1>Bienvenue sur notre boutique de téléphones</h1>
        <p>Trouvez les meilleurs téléphones au meilleur prix !</p>
        <button className="shop-now" onClick={handleDiscoverProducts}>
          Découvrir les Produits
        </button>
      </div>
      <div className="promotions">
        <h2>Produits en vedette</h2>
        <div className="product-list">
          <div className="product">
            <img src={ihpne14} alt="iPhone 14" />
            <h3>iPhone 14</h3>
            <p>Prix : 10 999 MAD</p>
          </div>
          <div className="product">
            <img src={SamsungGalaxyS23} alt="Samsung Galaxy S23" />
            <h3>Samsung Galaxy S23</h3>
            <p>Prix : 8 799 MAD</p>
          </div>
          <div className="product">
            <img src={GooglePixel7} alt="Google Pixel 7" />
            <h3>Google Pixel 7</h3>
            <p>Prix : 7 299 MAD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
