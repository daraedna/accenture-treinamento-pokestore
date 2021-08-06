import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [totalProductsNumber, setTotalProductsNumber] = useState(0);

  /* 
    Se houver carrinho salvo no localStorage, 
    será renderizado e persistido.
  */
  useEffect(() => {
    const storagedCart = localStorage.getItem('@PokeStore:cart');

    if (storagedCart) {
      const storagedCartJson = JSON.parse(storagedCart);
      setCart(storagedCartJson)
    }
  }, [])

  useEffect(() => {
    // Inserindo o carrinho atualizado no localStorage.
    if (cart) {
      localStorage.setItem('@PokeStore:cart', JSON.stringify(cart));
    }

    // número de itens ao todo no carrinho 
    setCartItemsNumber(cart.length);

    // número de produtos ao todo no carrinho 
    const totalProducts = cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount;
    }, 0);

    setTotalProductsNumber(totalProducts)
  }, [cart]);

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
        throw Error()
      }
    } catch (error) {
      alert("Erro na remoção do produto")
    }
  }

  const updateProductAmount = ({ productId, amount }) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
      } else {
        throw Error()
      }
    } catch (error) {
      alert("Erro na atualização da quantidade do produto");
    }
  }

  const setEmptyCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        updateProductAmount,
        cartItemsNumber,
        setEmptyCart,
        totalProductsNumber
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