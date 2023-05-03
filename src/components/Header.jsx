import { Link } from 'react-router-dom';
function Header({ basketCounter, idCard }) {
  
  return (
    <div className="containerHeader">
      <div className="header">
        <h2>Канцсервіс</h2>
      </div>
      <Link to="/basket" className="link">
        <div className="containerBasket">
          <button className="basket-img">
            <img src="./img/basket.png" alt=""></img>
          </button>
          <div className="basket-counter">
            <p>{idCard.length}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Header;
