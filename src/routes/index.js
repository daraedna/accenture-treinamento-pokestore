import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/contexts/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Edit from '../pages/Profile/Edit'
import Cart from '../pages/Cart';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import { Styled } from './styles';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


export default function Routes() {
    const { auth } = useAuth();
    let isloginPage = useRouteMatch("/login");
    let isRegisterPage = useRouteMatch("/register");

    console.log(auth)
    return (
        <Styled.AppLayout>
            <Navbar />
            <Styled.PageLayout loginPage={isloginPage} registerPage={isRegisterPage}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/cart" exact component={Cart} />
                    {auth ? <Route path="/profile" exact component={Profile} />  : ''}
                    {auth ? <Route path="/profile/edit" exact component={Edit} /> : ''}
                    <Route path="/login" exact>
                        {auth ?
                            <Redirect to="/home" />
                            :
                            <Login />
                        }
                    </Route>
                    <Route path="/register" component={Register} exact>
                        {auth ?
                            <Redirect to="/home" />
                            :
                            <Register />
                        }
                    </Route>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Styled.PageLayout>
        </Styled.AppLayout>
    )
}
