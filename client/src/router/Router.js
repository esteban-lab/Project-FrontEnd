import React from 'react'
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Index from '../pages/Index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Router() {
    return (
        <div>
        <BrowserRouter>
            <Navbar />
            <Switch>
                 <Route exact path ="/" component={Index} />
            </Switch>
            <Footer/>
        </BrowserRouter>
            
        </div>
    )
}
