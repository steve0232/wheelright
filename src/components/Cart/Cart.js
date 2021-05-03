import CartItems from './CartItems';
import DiscountCode from './DiscountCode';
import Checkout from './Checkout';

const Cart = props => {
  const {
    cartItems,
    setCartItems,
    onAdd,
    onRemove,
    onDiscount,
    usedDiscountCode,
    setUsedDiscountCode,
    discountAmount,
    setDiscountAmount,
    products,
    setMultibuyAllowed,
  } = props;

  if (usedDiscountCode) {
    setDiscountAmount(0.5);
  }

  const totalPrice =
    cartItems.reduce((a, c) => a + c.newPrice * c.qty, 0) - discountAmount;

  return (
    <aside className='rounded padded col-bg-light margin'>
      <h2>Shopping Cart</h2>
      <div>
        <CartItems
          cartItems={cartItems}
          onRemove={onRemove}
          onAdd={onAdd}
          products={products}
          totalPrice={totalPrice}
        />
        <DiscountCode
          usedDiscountCode={usedDiscountCode}
          discountAmount={discountAmount}
          cartItems={cartItems}
          onDiscount={onDiscount}
        />
        <Checkout
          cartItems={cartItems}
          totalPrice={totalPrice}
          setCartItems={setCartItems}
          setDiscountAmount={setDiscountAmount}
          setUsedDiscountCode={setUsedDiscountCode}
          setMultibuyAllowed={setMultibuyAllowed}
        />
      </div>
    </aside>
  );
};

export default Cart;
