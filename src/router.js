import React from 'react'
import {BrowserRouter, Route, Switch}
from 'react-router-dom'
import App from './App'
import Panel from './components/Panel/Panel'
import Posts from './containers/Posts/Posts'

import Albums from './containers/Albums/Albums'
import NotFound from './components/NotFound/NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/posts' component={Posts}/>
            
            <Route path='/albums'component={Albums}/>
            <Route path='/panel'component={Panel}/>
            <Route component={NotFound}/>

        </Switch>
    </BrowserRouter>
)

export default Router;