import Product from './Product';

function ProductsList({ products }) {
  return (
    <div className="containerProducts">
      {products.map((product) => (
        <Product
          key={product.id}
          id = {product.id}
          name={product.title}
          description={product.description}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
}
export default ProductsList;
