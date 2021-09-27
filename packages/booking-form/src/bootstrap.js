import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';
const mount = (el, {onNavigate, initalPathName}) => {
    const history = createMemoryHistory();
    
    if(onNavigate){
        history.listen(onNavigate);
    }

    history.push(initalPathName);
    ReactDOM.render(
       <App history={history}/>,
        el
    );

    return {
        onParentNavigate: ({pathname: nextPathName})  => {
            const currentPath = history.location.pathname;
            if(currentPath !== nextPathName){
                history.push(nextPathName)
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_booking-dev-root');
    if(devRoot){
        mount(devRoot, {});
    }
}

export {
    mount,
}