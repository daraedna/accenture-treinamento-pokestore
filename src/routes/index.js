import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/contexts/AuthProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import { Styled } from './styles';

export default function Routes() {
    const { auth } = useAuth();

    return (
        <Styled.AppLayout>
            <Styled.PageLayout>
                <Switch>
                    {auth ?
                        <>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/404" component={NotFound} />
                        </>
                        :
                        <>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/login"  component={Login} />
                            <Route path="/404" component={NotFound} />
                        </>
                    }
                </Switch>
            </Styled.PageLayout>
        </Styled.AppLayout>
    )
}
