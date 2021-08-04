import React, { useMemo } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Styled } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../../components/Button';

function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: async values => {
      //alert(JSON.stringify(values, null, 2));
      await SignIn(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Image src={Logo} rounded width={200} className="mt-4" />
          <Styled.FormContent onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Login</Form.Label>
              <Form.Control
                id="login"
                name="login"
                placeholder="Seu login"
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                placeholder="Sua Senha"
                onChange={formik.handleChange}
              />
            </Form.Group>
            {AppError}
            <Styled.ButtonLoginContent>
              <Button type="primary">
                Fazer login
              </Button>
            </Styled.ButtonLoginContent>
            <Styled.ButtonContent>
              <Button type="secondary" onClick={() => history.push("/register")}>
                Cadastre-se
              </Button>
            </Styled.ButtonContent>
          </Styled.FormContent>
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default Login;