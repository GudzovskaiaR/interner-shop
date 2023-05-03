import { Link } from 'react-router-dom';
import { useState } from 'react';

function BasketTotalSum({ pricecard }) {
  return (
    <div className="basket-actions">
      <Link to="/" className="link">
        <div className="btn-back">
          <button>Продовжити покупки</button>
        </div>
      </Link>
      <div className="making-purchase">
        <p> {pricecard} грн</p>
        <button>Оформити замовлення</button>
      </div>
    </div>
  );
}

export default BasketTotalSum;
