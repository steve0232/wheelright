const Checkout = props => {
  const {
    cartItems,
    totalPrice,
    setCartItems,
    setDiscountAmount,
    setUsedDiscountCode,
    setMultibuyAllowed,
  } = props;

  const checkout = () => {
    if (totalPrice < 1) {
      alert(`Thank you for your payment of ${parseInt(totalPrice * 100, 10)}p`);
    } else {
      alert(`Thank you for your payment of £${totalPrice.toFixed(2)}`);
    }
    setCartItems([]);
    setDiscountAmount(0);
    setUsedDiscountCode(false);
    setMultibuyAllowed(true);
  };

  return (
    <div>
      {cartItems.length !== 0 && (
        <div>
          <button className='col-bg-secondary col-dark' onClick={checkout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
