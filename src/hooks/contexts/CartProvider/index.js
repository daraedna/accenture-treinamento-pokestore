import { useEffect } from 'react';
import { createContext, useContext, useRef, useState } from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@PokeStore:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  })

  const previousCartRef = useRef();
  useEffect(() => {
    previousCartRef.current = cart;
  });
  const cartPreviosValue = previousCartRef ?? cart;
  useEffect(() => {
    if (cartPreviosValue !== cart) {
      localStorage.setItem('@PokeStore:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviosValue]);

  const addProductToCart = (productId) => {
    const updatedCart = [...cart];
    const productExists = updatedCart.find(product => product.id === productId)
  }

  const removeProductFromCart = () => {

  }

  const updateProductAmount = () => {

  }


  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}
export { CartProvider, useCart };