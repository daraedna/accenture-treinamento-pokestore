import React from 'react';

import { Styled } from './styles';

function Cart() {
  return (
    <Styled.Container>
      <Styled.CartWrapper>
        <Styled.CartTable>
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
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td>
                <span>Picachu</span>
                <span>R$ 20.000,00</span>
              </td>
              <td>
                <button>-</button>
                <input type="text" value="1" />
                <button>+</button>
              </td>
              <td>
                <span>R$ 20.000,00</span>
              </td>
              <td>
                <button>Lixo</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">
                <button>Finzalizar Pedido</button>
                <div>
                  <p>Total: </p>
                  <strong>R$ 38.000,00</strong>
                </div>
              </td>
            </tr>
          </tfoot>
        </Styled.CartTable>
      </Styled.CartWrapper>
    </Styled.Container>
  );
}

export default Cart;