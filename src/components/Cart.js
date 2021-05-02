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
  } = props;

  if (usedDiscountCode) {
    setDiscountAmount(0.5);
  }

  const totalPrice =
    cartItems.reduce((a, c) => a + c.newPrice * c.qty, 0) - discountAmount;

  const checkout = () => {
    if (totalPrice < 1) {
      alert(`Thank you for your payment of ${parseInt(totalPrice * 100, 10)}p`);
    } else {
      alert(`Thank you for your payment of £${totalPrice.toFixed(2)}`);
    }
    setCartItems([]);
    setDiscountAmount(0);
    setUsedDiscountCode(false);
  };

  return (
    <aside className='rounded padded col-bg-light margin'>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Your shopping cart is empty</div>}
        {cartItems.map(item => {
          return (
            <div key={item.id}>
              <div>
                {item.qty} x {item.name} @ £{item.newPrice.toFixed(2)} per{' '}
                {item.unit}
                <button
                  onClick={() => onRemove(item)}
                  className='col-bg-primary col-light margin-small'
                >
                  -
                </button>
                <button
                  onClick={() => onAdd(item)}
                  className='col-bg-primary col-light margin-small'
                >
                  +
                </button>
                Subtotal: £{item.subtotal.toFixed(2)}
              </div>

              {item.multibuyProductId && (
                <div className='col-highlight'>
                  Buy {item.multibuyQuantity}{' '}
                  {products[item.multibuyProductId - 1].name} to get{' '}
                  {item.multibuyDiscount * 100}% off{' '}
                  {products[item.id - 1].name}
                </div>
              )}
              {item.discount > 0 && item.discountedTotal * item.qty < 100 && (
                <div className='col-highlight'>
                  {item.name} {item.discount}% off per {item.unit}: -
                  {item.discountedTotal * item.qty}p
                </div>
              )}
              {item.discount > 0 && item.discountedTotal * item.qty >= 100 && (
                <div className='col-highlight'>
                  {item.name} {item.discount}% off per {item.unit}: -£
                  {((item.discountedTotal * item.qty) / 100).toFixed(2)}
                </div>
              )}
            </div>
          );
        })}
        {usedDiscountCode && discountAmount < 1 && (
          <div className='col-highlight'>
            Discount applied: -{discountAmount.toFixed(2)}p
          </div>
        )}
        {usedDiscountCode && discountAmount >= 1 && (
          <div className='col-highlight'>
            Discount applied: -£{discountAmount.toFixed(2)}
          </div>
        )}
        {cartItems.length !== 0 && (
          <div>Total amount: £{totalPrice.toFixed(2)}</div>
        )}
        <div>
          {!usedDiscountCode && cartItems.length !== 0 && (
            <div>
              <input type='text' placeholder='Enter your discount code' />
              <button className='col-bg-primary col-light' onClick={onDiscount}>
                Apply discount
              </button>
            </div>
          )}
          {cartItems.length !== 0 && (
            <div>
              <button className='col-bg-secondary col-dark' onClick={checkout}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Cart;
