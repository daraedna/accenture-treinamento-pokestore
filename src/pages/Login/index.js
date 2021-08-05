import React, { useMemo } from 'react';
import { Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from '../../hooks/contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Styled } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../../components/Button';

function Login() {
  const { SignIn, error, loading } = useAuth();

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: async values => {
      SignIn(values);
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Image src={Logo} rounded width={180} className="mt-4" />
          <Styled.FormContent onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="login"
                name="login"
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
              />
            </Form.Group>
            {AppError}
            <Styled.ButtonLoginContent>
              <Button type="primary" disabled={loading}>
                {loading ?
                  <Spinner animation="border" />
                  :
                  'Fazer login'
                }
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