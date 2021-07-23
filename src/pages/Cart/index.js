import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from '../../components/Button';
import pikachuImg from '../../assets/pikachu.png';
import { FiTrash, FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Styled } from './styles';
import { mixins } from "../../styles/mixins";

function Cart() {
  return (
    <Styled.Container>
      <Table
        borderless
      >
        <thead>
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
            <td>
              <img src={pikachuImg} alt="Imagem do Pokémon" />
            </td>
            <td>
              <Styled.ProductPriceDataCell>
                <span>Picachu</span>
                <span>R$ 20.000,00</span>
              </Styled.ProductPriceDataCell>
            </td>
            <td>
              <Styled.AmountButton>
                <FiMinusCircle size="22px" color={mixins.colors.text} />
              </Styled.AmountButton>
              <Styled.Input
                type="number"
                id="amount"
                name="amount"
                value="1"
                onChange={() => { }} /* trocar para função real */
              />
              <Styled.AmountButton>
                <FiPlusCircle size="22px" color={mixins.colors.text} />
              </Styled.AmountButton>
            </td>
            <td>
              <span>R$ 20.000,00</span>
            </td>
            <td>
              <Styled.DeleteButton type="button">
                <FiTrash size="22px" color="#EA4335" />
              </Styled.DeleteButton>
            </td>
          </Styled.ProductRow>
        </tbody>
        <tfoot>
          <tr>
            <td className="FootRow" colSpan="5">
              <div className="FootRowContentWrapper">
                <Button type="primary">Finzalizar Pedido</Button>
                <div className="totalWrapper">
                  <p>Total: </p>
                  <strong>R$ 38.000,00</strong>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Styled.Container >
  );
}

export default Cart;