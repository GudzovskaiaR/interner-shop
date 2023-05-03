import { useState } from 'react';
import { useContext } from 'react';
import Context from '../Context';
function BasketProduct({ id, index, deleteProduct, setSum, sum }) {
  const { products  } = useContext(Context);
  const { img, title, price } = products[Number(index) - 1];
  const [countProduct, setCountProduct] = useState(1);
  const [sumProduct, setSumProduct] = useState(price);

  function addProductToBasket() {
    setCountProduct(countProduct + 1);
    setSumProduct(sumProduct + price);
    setSum(sum + price);
  }
  function reduceProductToBasket() {
    if (countProduct > 1) {
      setCountProduct(countProduct - 1);
      setSumProduct(sumProduct - price);
      setSum(sum - price);
    }
  }

  return (
    <div className="singlePurchase">
      <div className="img-purchase">
        <img src={img} alt="photo"></img>
      </div>
      <div className="name-purchase">
        <p>{title}</p>
      </div>
      <div className="btn-buying">
        <div className="btn-minus">
          <button onClick={() => reduceProductToBasket()}>-</button>
        </div>
        <div className="number-product">
          <p>{countProduct}</p>
        </div>
        <div className="btn-plus">
          <button onClick={() => addProductToBasket()}>+</button>
        </div>
      </div>

      <div className="cost-product">
        <div>
          {' '}
          <p>Сума</p>
        </div>
        <div>
          <p>{sumProduct} </p>
        </div>
        <div>
          {''}
          <p>грн</p>
        </div>
      </div>
      <div className="delete-product">
        <button onClick={() => deleteProduct(id, sumProduct)}>
          <img src="./img/bin.png"></img>
        </button>
      </div>
    </div>
  );
}
export default BasketProduct;
