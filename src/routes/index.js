import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Styled } from './styles';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
        </Switch>
    )
}
