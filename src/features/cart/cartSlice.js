export const addItem = (itemToAdd) => {
    return {
      type: 'cart/addItem',
      payload: itemToAdd,
    };
  };
  
  // Create your changeItemQuantity action creator here.
  
  
  const initialCart = {};
  export const cartReducer = (cart = initialCart, action) => {
    switch (action.type) {
      case 'cart/addItem': {
        const { name, price } = action.payload;
  
        // if the item already exists, increase the quantity by 1, otherwise set it to 1
        const quantity = cart[name] ? cart[name].quantity + 1 : 1;
        const newItem = { price, quantity };
  
        // Add the new item to the cart (or replace it if it existed already)
        return { 
          ...cart, 
          [name]: newItem 
        };
      }
      case 'cart/changeItemQuantity': {
        const { name, newQuantity } = action.payload;
        const itemToUpdate = cart[name];
  
        // Create a copy of itemToUpdate and update the quantity prop.
  
        // Return a copy of the cart with the updatedItem included.
        return {};
      }
      default: {
        return cart;
      }
    }
  };