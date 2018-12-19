import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NomatchScreen = () => {
    if(<Route path='*' />){
        return(<Redirect push to="/"/>);
    } else {
        console.log("go to Home screen!");
    }
}

export default NomatchScreen;