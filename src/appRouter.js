import React from 'react';
import {Router} from '@reach/router'
import { PHome, PPokemon, PNotFound } from './pages';


const AppRouter = () => {
    return (
        <Router>
            <PHome path="/" />
            <PPokemon path="/pokemon/:name" />
            <PNotFound default />
        </Router>
    )
}

export default AppRouter;