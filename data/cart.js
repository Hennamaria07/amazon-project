export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2,
  },
];

//ADD TO CART FUNCTION
export const addToCart = (productId) => {
  
      let matchingItem;

      cart.forEach((cardItems) => {
        if (productId === cardItems.productId) {
          matchingItem = cardItems;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
}

//REMOVE CART FUNCTIONS
export const removeCart = (productId) => {
  const newCart = [];
  cart.forEach( (cardItem) => {
    if(cardItem.productId !== productId) {
      newCart.push(cardItem);
    }
  });
  cart = newCart;
}