import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../hooks/contexts/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Edit from '../pages/Profile/Edit'
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import { Styled } from './styles';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Routes() {
    const { auth } = useAuth();
    let isloginPage = useRouteMatch("/login");

    return (
        <Styled.AppLayout>
            {!isloginPage && <Navbar />}
            <Styled.PageLayout loginPage={isloginPage}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/cart" component={Cart} />
                    {auth ? <Route path="/profile" exact component={Profile} />  : ''}
                    {auth ? <Route path="/profile/edit" component={Edit} /> : ''}
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Styled.PageLayout>
        </Styled.AppLayout>
    )
}
