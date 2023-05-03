import { useContext } from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
function Product({ id, name, price, img }) {
  const { changeBasketCounter } = useContext(Context);

  return (
    <div id={id} className="containerProduct">
      <Link to={`/${id}`} className="link">
        <div>
          <img src={img} alt=""></img>
          <h3>name:{name}</h3>

          <h3>price:{price}</h3>
        </div>
      </Link>
      <button
        className="btn-product"
        onClick={(e) => changeBasketCounter(e.currentTarget.closest('div').id)}
      >
        add
      </button>
    </div>
  );
}
export default Product;
