import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Context from './Context';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
import Basket from './components/Basket';

import SingleProduct from './components/SingleProduct';

function App() {
  const [products, setProducts] = useState([]);

  const [idCard, setIdCard] = useState([]);

  function changeBasketCounter(id) {
    const data = { idcard: id, price: products[id - 1].price};
    fetch('http://localhost:3000/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => setIdCard([...idCard, json]));
  }

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/card')
      .then((response) => response.json())
      .then((json) => setIdCard(json));
  }, []);
  const objectContext = {
    changeBasketCounter: changeBasketCounter,
    idCard: idCard,
    products: products,
    setIdCard,

  };

  return (
    <Context.Provider value={objectContext}>
      <div className="container">
        <Header idCard={idCard} />
        {/* <Basket /> */}

        <Routes>
          <Route
            path=":idPage"
            element={<SingleProduct products={products} />}
          />
          <Route path="/" element={<ProductsList products={products} />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
