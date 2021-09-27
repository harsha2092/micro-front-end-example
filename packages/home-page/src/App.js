import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import Landing from './components/Landing';
import propertyPage from './components/PropertyPage';

export default ({history}) => {
    return <div>
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/property" component={propertyPage}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}