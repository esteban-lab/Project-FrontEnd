import React from 'react'
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Index from '../pages/Index';
import Navbar from '../components/Navbar';

export default function Router() {
    return (
        <div>
        <BrowserRouter>
            <Navbar />
            <Switch>
                 <Route exact path ="/" component={Index} />
            </Switch>
        </BrowserRouter>
            
        </div>
    )
}
