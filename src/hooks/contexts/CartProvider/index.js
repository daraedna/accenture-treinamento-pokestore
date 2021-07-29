import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect
} from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]
    /* 
    () => {
    const storagedCart = localStorage.getItem('@PokeStore:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  } */)

  useEffect(() => {
    console.log(cart);
  }, [cart])

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

  const addProductToCart = (item) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === item.id);

      const currentAmount = productExists ? productExists.amount : 0;

      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount;
      } else {
        // recebendo novo produto no carrinho
        // talvez fazer a chamada a API aqui
        // usar async await nesse caso
        const product = item;
        const newProduct = {
          ...product,
          amount: 1,
        }
        updatedCart.push(newProduct)
      }
      setCart(updatedCart);

    } catch (error) {
      alert("Erro em adicionar produto");
    }
  }

  const removeProductFromCart = (productId) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        // removendo produto do array pelo id
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else {
        throw Error("Produto não removido")
      }
    } catch (error) {
      alert("Erro na remoção do produto")
    }
  }

  const updateProductAmount = ({ productId, amount }) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error("Quantidade não atualizada")
      }
    } catch (error) {
      alert("Erro na atualização da quantidade do produto");
    }
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