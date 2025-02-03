import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from './actions';
import './styles/Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(id, quantity));
    }
  };

  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrderClick = () => {
    navigate('/Payment');
  };

  return (
    <div className="cart">
      <h1>Panier</h1>

      <ul>
        {filteredCart.length > 0 ? (
          filteredCart.map((item) => {
            const imagePath = require(`./images/${item.image}`);

            return (
              <li key={item.id}>
                <img src={imagePath} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Prix: {item.price} DH</p>
                <div>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p>Total: {item.price * item.quantity} DH</p>
                <button className="remove" onClick={() => handleRemoveFromCart(item.id)}>
                  Supprimer
                </button>
                
                <button onClick={handleOrderClick}>Commander</button>
              </li>
            );
          })
        ) : (
          <p>Votre panier est vide</p>
        )}
      </ul>

      <h3>
        Total: {filteredCart.reduce((total, item) => total + item.price * item.quantity, 0)} DH
      </h3>
    </div>
  );
};

export default Cart;
