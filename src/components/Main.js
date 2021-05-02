import Product from './Product';

const Main = props => {
  const { products, onAdd } = props;
  return (
    <main className='rounded padded col-bg-light margin'>
      <div>
        <h2>Products</h2>
          {products.map(product => (
            <Product key={product.id} product={product} onAdd={onAdd} />
          ))}
      </div>
    </main>
  );
};

export default Main;
