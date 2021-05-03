const CartItems = props => {
  const { cartItems, onRemove, onAdd, products, totalPrice } = props;
  return (
    <div>
      {cartItems.length === 0 && <div>Your shopping cart is empty</div>}
      {cartItems.map(item => {
        return (
          <div key={item.id} className='cart-container'>
            <hr />
            <div>
              {item.qty} x {item.name} @ £{item.newPrice.toFixed(2)} per{' '}
              {item.unit}
              <div>
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
              </div>
              <div className='cart-totals col-primary'>
                Subtotal: £{item.subtotal.toFixed(2)}
              </div>
            </div>

            {item.multibuyProductId && (
              <div className='col-highlight'>
                Buy {item.multibuyQuantity} {item.name} to get{' '}
                {item.multibuyDiscount * 100}% off{' 1 x '}
                {products[item.multibuyProductId - 1].name}
              </div>
            )}
            {item.message && (
              <div className='col-highlight'>{item.message}</div>
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
            {!item.discount && !item.multibuyProductId && <div>&nbsp;</div>}
          </div>
        );
      })}
      {cartItems.length > 0 && <hr />}
      {cartItems.length !== 0 && (
        <div>
          <h3 className='total col-primary'>
            Total amount: £{totalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CartItems;
