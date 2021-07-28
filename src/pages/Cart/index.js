import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from '../../components/Button';
import pikachuImg from '../../assets/pikachu.png';
import { FiTrash, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Styled } from './styles';
import { mixins } from "../../styles/mixins";

function Cart() {

  const handleIncrementProduct = (product) => {

  }

  const handleDecrementProduct = (product) => {

  }

  const handleRemoveProduct = (productId) => {

  }

  /* const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount;
  }, 0); */

  return (
    <Styled.Container>
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
            <Styled.ProductRow>
              <td className="avatar-container">
                <img src={pikachuImg} alt="Imagem do Pokémon" />
              </td>
              <td className="product-price-container">
                <Styled.ProductPriceDataCell>
                  <span>Picachu</span>
                  <span>R$ 20.000,00</span>
                </Styled.ProductPriceDataCell>
              </td>
              <td className="product-amount-container">
                <Styled.AmountButton
                  type="button"
                  /* disabled={product.amount <= 1} */
                  onclick={() => handleDecrementProduct(/* product */)}
                >
                  <FiMinusCircle size="18px" color={mixins.colors.text} />
                </Styled.AmountButton>
                <Styled.Input
                  type="text"
                  id="amount"
                  name="amount"
                  readOnly
                  value="1"/* {product.amount} */
                />
                <Styled.AmountButton
                  type="button"
                  onclick={() => handleIncrementProduct(/* product */)}
                >
                  <FiPlusCircle size="18px" color={mixins.colors.text} />
                </Styled.AmountButton>
              </td>
              <td className="subtotal-container">
                <span>R$ 20.000,00</span>
              </td>
              <td className="delete-button-container">
                <Styled.DeleteButton
                  type="button"
                  onclick={() => handleRemoveProduct(/* product.id */)}
                >
                  <FiTrash size="22px" color="#EA4335"
                    className="trashIcon"
                  />
                </Styled.DeleteButton>
              </td>
            </Styled.ProductRow>
          </tbody>
          <tfoot>
            <tr>
              <td className="foot-row" colSpan="5">
                <Styled.FootRowContentWrapper>
                  <Button type="primary">
                    Finzalizar Pedido
                  </Button>
                  <Styled.TotalPriceWrapper>
                    <p>Total:</p>
                    <strong>R$ 38.000,00</strong>
                  </Styled.TotalPriceWrapper>
                </Styled.FootRowContentWrapper>
              </td>
            </tr>
          </tfoot>
        </Table>
      </Styled.TableWrapper>
    </Styled.Container >
  );
}

export default Cart;