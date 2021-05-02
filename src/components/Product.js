const Product = props => {
  const { product, onAdd } = props;
  return (
    <div key={product.id} className='grid-container'>
      <img src={product.imgUrl} alt={product.name} className='image-small' />
      <h4 className='col-primary'>{product.name}</h4>
      {product.price < 1 && (
        <p>
          {parseInt(product.price * 100, 10)}p per {product.unit}
        </p>
      )}
      {product.price >= 1 && (
        <p>
          £{product.price.toFixed(2)} per {product.unit}
        </p>
      )}

      {product.discount ? (
        <p>
          {product.name} {product.discount}% off
        </p>
      ) : (
        <p>(No offers available)</p>
      )}

      <button
        className='col-bg-primary col-light'
        onClick={() => onAdd(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
