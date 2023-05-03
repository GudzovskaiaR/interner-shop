import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';
function SingleProduct({ products }) {
  const { idPage } = useParams();
  
  const { changeBasketCounter } = useContext(Context);
  if (products.length !== 0) {
   
    const { id, title, description, price, img } = products[idPage-1];

    return (
      <div id={id} className="containerSingleProduct">
        <div className="singleProduct-img">
          <img src={img} alt="" />
        </div>
        <div className="container-singleProductInfo">
          <div className="singleProductInfo">
            <h1>{title} </h1>
            <p>{description} </p>
            <h2>{price} </h2>
            <div className="btn-buy">
              <button onClick={(e) => changeBasketCounter(id)}>купити</button>
            </div>
          </div>
          <Link to="/" className='link'>
          <div>
            <button>X</button>
          </div>
          </Link>
          
        </div>
      </div>
    );
  }
}
export default SingleProduct;
