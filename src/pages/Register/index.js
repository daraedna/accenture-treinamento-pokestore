import React, { useMemo } from 'react';
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
//import { useAuth } from '../../hooks/contexts/AuthProvider';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Styled } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../../components/Button';
import { useProfile } from '../../hooks/contexts/ProfileProvider';

function Register() {
  const { postProfile, error } = useProfile();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      city: '',
    },

    onSubmit: async values => {
      //alert(JSON.stringify(values, null, 2));
      await postProfile(values);
      //await SignIn(values);
      history.push("/");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
    <>
      <Styled.Container>
        <Styled.Content>
          <Image src={Logo} rounded width={160} className="mt-4" />
          <Styled.FormContent onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                id="name"
                name="name"
                placeholder="Seu Nome"
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Seu E-mail"
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
            <Form.Group className="mb-4">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                id="city"
                name="city"
                type="text"
                placeholder="Sua Cidade"
                onChange={formik.handleChange}
              />
            </Form.Group>
            {AppError}
            <Styled.ButtonContent>
              <Button type="primary">
                Cadastre-se
              </Button>
              <Button type="secondary" onClick={() => history.push("/login")}>
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