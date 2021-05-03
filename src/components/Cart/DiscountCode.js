const DiscountCode = props => {
const {usedDiscountCode, discountAmount, cartItems, onDiscount} = props;

  return (
    <>
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
      {!usedDiscountCode && cartItems.length !== 0 && (
        <div>
          <form onSubmit={onDiscount}>
            <input type='text' placeholder='Enter your discount code' />
            <button className='col-bg-primary col-light'>Apply discount</button>
          </form>
        </div>
      )}
    </>
  );
};

export default DiscountCode;
