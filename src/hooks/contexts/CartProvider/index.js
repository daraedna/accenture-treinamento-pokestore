import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect
} from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@PokeStore:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [
      {
        id: 1,
        name: 'Picachu',
        amount: 1,
        price: 200,
      },
      {
        id: 2,
        name: 'Charmander',
        amount: 1,
        price: 179.9,
      },
      {
        id: 3,
        name: 'Bulbasaur',
        amount: 1,
        price: 179.9,
      }
    ];
  })

  const previousCartRef = useRef();

  useEffect(() => {
    previousCartRef.current = cart;
  });

  // Se o previousCartRef for null/undefined, retornará o cart
  const cartPreviosValue = previousCartRef ?? cart;

  useEffect(() => {
    if (cartPreviosValue !== cart) {
      localStorage.setItem('@PokeStore:cart', JSON.stringify(cart));
    }
  }, [cart, cartPreviosValue]);

  const addProductToCart = (productId) => {
    const updatedCart = [...cart];
    const productExists = updatedCart.find(product => product.id === productId);

    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (productExists) {
      productExists.amount = amount;
    } else {
      // recebendo novo produto no carrinho
      // talvez fazer a chamada a API aqui
      // usar async await nesse caso
      const product = { productId, amount };

      const newProduct = {
        ...product,
        amount: 1,
      }
      updatedCart.push(newProduct)
    }
    setCart(updatedCart);
  }

  const removeProductFromCart = (productId) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.find(product => product.id === productId);

      if (product) {

      }

    } catch (error) {
      alert("Erro na remoção do produto")
    }
  }

  const updateProductAmount = () => {

  }


  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        updateProductAmount
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