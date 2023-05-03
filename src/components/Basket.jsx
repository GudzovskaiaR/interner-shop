import { useState } from 'react';
import { useContext } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import BasketProduct from './BasketProduct';
import BasketTotalSum from './BasketTotalSum';

function Basket() {
  const { idCard, setIdCard } = useContext(Context);
  const priceCard = idCard

    .map((item) => item.price)
    .reduce((total, amount) => total + amount);
  const [sum, setSum] = useState(priceCard);
  function deleteProduct(id, sumProduct) {
    fetch(`http://localhost:3000/card/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((json) => json);
    setIdCard(idCard.filter((item) => item.id !== id));
    setSum(sum - sumProduct);
  }

  return (
    <div className="container-basket">
      <header className="header">
        <div className="header-name">
          <p>Кошик</p>
        </div>
        <Link to="/" className="link">
          <div className="header-btn">
            <button>X</button>
          </div>
        </Link>
      </header>
      <hr></hr>
      <div className="purchase-list">
        {idCard.map((card) => {
          return (
            <BasketProduct
              key={card.id}
              index={card.idcard}
              id={card.id}
              deleteProduct={deleteProduct}
              setSum={setSum}
              sum={sum}
            />
          );
        })}
      </div>
      <BasketTotalSum pricecard={sum} />
    </div>
  );
}
export default Basket;
