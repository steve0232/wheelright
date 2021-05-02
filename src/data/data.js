const data = {
  products: [
    {
      id: 1,
      name: 'Apples',
      price: 1,
      unit: 'bag',
      imgUrl: 'images/apple.svg',
      discount: 10,
    },
    {
      id: 2,
      name: 'Bread',
      price: 0.8,
      unit: 'loaf',
      imgUrl: 'images/bread.svg',
      discount: 0,
      multibuyQuantity: 2,
      multibuyProductId: 4,
      multibuyDiscount: 0.5,
    },
    {
      id: 3,
      name: 'Milk',
      price: 1.3,
      unit: '500ml',
      imgUrl: 'images/milk.svg',
      discount: 0,
    },
    {
      id: 4,
      name: 'Soup',
      price: 0.65,
      unit: 'tin',
      imgUrl: 'images/soup.svg',
      discount: 0,
    },
  ],
};

export default data;
