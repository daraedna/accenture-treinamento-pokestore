import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/contexts/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import Footer from '../components/Footer';
import { Styled } from './styles';
import NavBar from '../components/NavBar';

export default function Routes() {
    const { auth } = useAuth();

    return (
        <Styled.AppLayout>
            {auth && <NavBar />}
            <Switch>
                <Route path="/profile" component={Profile} />
                   {auth ?
                        <>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/profile" component={Profile} />
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
