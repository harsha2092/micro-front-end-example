import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import BookingPage from './components/BookingPage';

export default ({history}) => {
    return <div>
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/book" component={BookingPage}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}