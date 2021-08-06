import React, { useMemo } from 'react';
import { Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Styled } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../../components/Button';
import { useProfile } from '../../hooks/contexts/ProfileProvider';

function Register() {
  const { postProfile, error, loading } = useProfile();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      city: '',
    },

    onSubmit: async values => {
      postProfile(values);
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Image src={Logo} rounded width={140} className="mt-4" />
          <Styled.FormContent onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                id="name"
                name="name"
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
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
            <Form.Group className="mb-2">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
              />
            </Form.Group>
            {AppError}
            <Styled.ButtonContent>
              <Button variant="primary">
                {loading ?
                  <Spinner animation="border" size="sm"/>
                  :
                  'Cadastre-se'
                }
              </Button>
              <Button variant="secondary" onClick={() => history.push("/login")}>
                Voltar
              </Button>
            </Styled.ButtonContent>
          </Styled.FormContent>
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default Register;