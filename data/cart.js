export const cart = [];

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