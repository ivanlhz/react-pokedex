import React from 'react';
import {Router} from '@reach/router'
import {TMain} from './templates'
import { PHome, PPokemon, PNotFound } from './pages';


const AppRouter = () => {
    const footer = () => (<p>PokedexJS - Made with ReactJS- 2019</p>)

    return (
        <Router>
            <PHome path="/" />
            <PPokemon path="/pokemon/:name" />
            <PNotFound default />
        </Router>
    )
}

export default AppRouter;