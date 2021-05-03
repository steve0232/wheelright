import { useState, useEffect } from 'react';

import data from './data/data';

import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart/Cart';

const App = props => {
  const { products } = data;
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [usedDiscountCode, setUsedDiscountCode] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [multibuyAllowed, setMultibuyAllowed] = useState(true);

  useEffect(() => {
    const newProducts = products.map(item =>
      item.discount !== 0
        ? {
            ...item,
            newPrice: item.price - item.price / item.discount,
            discountedTotal: (item.price / item.discount) * 100,
            multibuyPrice: item.price * item.multibuyDiscount,
          }
        : {
            ...item,
            newPrice: item.price,
            multibuyPrice: item.price * item.multibuyDiscount,
          }
    );
    setUpdatedProducts(newProducts);
    console.log(newProducts);
  }, [products]);

  const onDiscount = e => {
    e.preventDefault();
    setUsedDiscountCode(true);
  };

  const onCheckMultibuy = () => {
    const soup = cartItems.find(item => item.id === 4);
    const bread = cartItems.find(item => item.id === 2);

    if (soup !== undefined) {
      if (soup.qty % 2) {
        console.log(`multibuyAllowed ${multibuyAllowed}`);
        console.log('2 soup');
        console.log(bread);
        if (bread && multibuyAllowed) {
          console.log(`bread.qty = ${bread.qty}`);
          console.log(`soup.qty = ${soup.qty}`);
          console.log('multibuying');
          bread.subtotal -= 0.4;
          bread.message = 'Multibuy discount applied (-50%)';
          setMultibuyAllowed(false);
        }
      }
    }
  };

  const onAdd = product => {
    if (multibuyAllowed) onCheckMultibuy();
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
                subtotal: exist.subtotal + exist.newPrice,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, qty: 1, subtotal: product.newPrice },
      ]);
    }
  };

  const onRemove = product => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <>
      <Header />
      <div className='container-master'>
        <Main products={updatedProducts} onAdd={onAdd} cartItems={cartItems} />
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDiscount={onDiscount}
          usedDiscountCode={usedDiscountCode}
          setUsedDiscountCode={setUsedDiscountCode}
          discountAmount={discountAmount}
          setDiscountAmount={setDiscountAmount}
          products={updatedProducts}
          setMultibuyAllowed={setMultibuyAllowed}
        />
      </div>
    </>
  );
};

export default App;

// For this week only Apples are at 10% off per bag purchased,
// For every two tins of soup that are purchased a bread can also be purchased at 50% off
// You also optionally provide a valid Discount token to redeem 50p off the total bill
