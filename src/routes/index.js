import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/contexts/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';
import { Styled } from './styles';
import Button from '../components/Button';

export default function Routes() {
    const { auth, SignOut } = useAuth();

    const handleClick = () => {
        SignOut();
    }

    return (
        <Styled.AppLayout>
            {auth && <Button type="secondary" onClick={handleClick}>Sair</Button>}
            <Switch>
                    {auth ?
                        <>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Redirect from="*" to={NotFound} />
                        </>
                    :
                        <Route path="/" exact component={Login} />
                    }
                    <Redirect from="*" to={NotFound} />
                </Switch>
            <Footer />
        </Styled.AppLayout>
    )
}
