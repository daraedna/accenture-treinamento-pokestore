import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useCart } from '../../hooks/contexts/CartProvider';

import Table from 'react-bootstrap/Table';
import Button from '../../components/Button';
import ModalComponent from '../../components/Modal';

import { FiTrash, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import successCartImg from '../../assets/success-cart.svg';

import { Styled } from './styles';
import { mixins } from "../../styles/mixins";

function Cart() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productDeletedId, setProductDeletedId] = useState(0);

  const {
    cart,
    updateProductAmount,
    removeProductFromCart,
    cartItemsNumber,
    setEmptyCart
  } = useCart();

  const history = useHistory();
  const handleClickBackToHome = () => history.push('/home');

  function handleEmptyCart() {
    handleClickBackToHome();
    setEmptyCart();
  }

  function handleIncrementProduct(product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1,
    });
  }

  function handleDecrementProduct(product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1,
    });
  }

  function handleShowModalDelete(productId) {
    setShowDeleteModal(true)
    setProductDeletedId(productId);
  }

  function handleRemoveProduct() {
    removeProductFromCart(productDeletedId);
    setShowDeleteModal(false)
  }

  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.priceNumber * product.amount;
  }, 0);

  // formatando os preços
  function priceFormat(value) {
    return Intl.NumberFormat(
      'pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <Styled.Container>
      {cartItemsNumber === 0 ?
        <Styled.Content>
          <h1>Seu carrinho está vazio =(</h1>
          <Button
            type="primary"
            onClick={handleClickBackToHome}
          >
            Voltar para Home
          </Button>
        </Styled.Content>
        :
        <Styled.Content>
          <h1>Meu carrinho</h1>
          <Styled.TableWrapper>
            <Table
              borderless
            >
              <thead className="table-head">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Produto</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <Styled.ProductRow key={product.id}>
                    <td className="avatar-container">
                      <img src={product.image} alt="Imagem do Pokémon" />
                    </td>
                    <td className="product-price-container">
                      <Styled.ProductPriceDataCell>
                        <span>{product.name}</span>
                        <span>{priceFormat(product.priceNumber)}</span>
                      </Styled.ProductPriceDataCell>
                    </td>
                    <td className="product-amount-container">
                      <Styled.AmountButton
                        type="button"
                        disabled={product.amount <= 1}
                        onClick={() => handleDecrementProduct(product)}
                      >
                        <FiMinusCircle size="18px" color={mixins.colors.text} />
                      </Styled.AmountButton>
                      <Styled.Input
                        type="text"
                        id="amount"
                        name="amount"
                        readOnly
                        value={product.amount}
                      />
                      <Styled.AmountButton
                        type="button"
                        onClick={() => handleIncrementProduct(product)}
                      >
                        <FiPlusCircle size="18px" color={mixins.colors.text} />
                      </Styled.AmountButton>
                    </td>
                    <td className="subtotal-container">
                      <span>{priceFormat(product.priceNumber * product.amount)}</span>
                    </td>
                    <td className="delete-button-container">
                      <Styled.DeleteButton
                        type="button"
                        onClick={() => handleShowModalDelete(product.id)}
                      >
                        <FiTrash size="22px" color="#EA4335"
                          className="trashIcon"
                        />
                      </Styled.DeleteButton>
                    </td>
                  </Styled.ProductRow>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="foot-row" colSpan="5">
                    <Styled.FootRowContentWrapper>
                      <Button
                        type="primary"
                        onClick={() => {
                          setShowSuccessModal(true)
                          setEmptyCart()
                        }}
                      >
                        Finzalizar Pedido
                      </Button>

                      <Styled.TotalPriceWrapper>
                        <p>Total:</p>
                        <strong>{priceFormat(total)}</strong>
                      </Styled.TotalPriceWrapper>
                    </Styled.FootRowContentWrapper>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Styled.TableWrapper>
        </Styled.Content>
      }
      {/* Delete item modal */}
      <ModalComponent
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
      >
        <BsExclamationCircle size="30px" color="#EA4335"
        />
        <h4>Deseja excluir o item do carrinho?</h4>
        <Button
          type="secondary"
          onClick={() => handleRemoveProduct()}
        >
          Sim, desejo excluir
        </Button>
      </ModalComponent>
      {/* Success modal */}
      <ModalComponent
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      >
        <img src={successCartImg} alt="Compra bem sucedida!" />
        <h4>Compra finalizada com sucesso!</h4>
        <p>Em breve você receberá um
          e-mail com todos os detalhes.</p>
        <Button
          type="primary"
          onClick={handleEmptyCart}
        >
          Voltar para Home
        </Button>
      </ModalComponent>
    </Styled.Container >
  );
}

export default Cart;