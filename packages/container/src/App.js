import React from 'react';
import BookingForm  from './components/BookingForm';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <h1>I am container app</h1>
                <hr/>
                    <HomePage/>
                    <BookingForm/>
            </div>
        </BrowserRouter>
    )
}