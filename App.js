import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Menu from './Menu';
import Acceuil from './Acceuil';
import Payment from './Payment';
import About from './About';
import { Routes ,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/acceuil" element={<Acceuil/>}></Route>
        <Route path="/produits" element={<ProductList/>}></Route>
        <Route path="/panier" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
