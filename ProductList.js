import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { useNavigate } from 'react-router-dom';
import productsData from './products.json';
import './styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(productsData); 
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    navigate('/panier'); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="product-list">
     
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <h1>Liste des Téléphones</h1>

      <ul>
        {currentProducts.map((product) => {
          const imagePath = require(`./images/${product.image}`); 

          return (
            <li key={product.id}>
              <img src={imagePath} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Prix: {product.price} DH</p>
              <button onClick={() => handleAddToCart(product)}>Ajouter au Panier</button>
            </li>
          );
        })}
      </ul>
      <footer className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Précédent
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </footer>
    </div>
  );
};

export default ProductList;
